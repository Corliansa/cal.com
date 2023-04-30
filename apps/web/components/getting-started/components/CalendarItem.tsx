import useAddAppMutation from "@calcom/app-store/_utils/useAddAppMutation";
import { InstallAppButtonWithoutPlanCheck } from "@calcom/app-store/components";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { App } from "@calcom/types/App";
import { Button, showToast } from "@calcom/ui";

interface ICalendarItem {
  title: string;
  description?: string;
  logo: string;
  type: App["type"];
}

const CalendarItem = (props: ICalendarItem) => {
  const { title, logo, type } = props;
  const { t } = useLocale();

  const mutation = useAddAppMutation(null, {
    onSuccess: (data) => {
      if (data?.setupPending) return;
      showToast(t("app_successfully_installed"), "success");
    },
    onError: (error) => {
      if (error instanceof Error) showToast(error.message || t("app_could_not_be_installed"), "error");
    },
  });

  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div className="flex items-center space-x-3">
        <img src={logo} alt={title} className="h-8 w-8" />
        <p className="text-sm font-bold">{title}</p>
      </div>
      <InstallAppButtonWithoutPlanCheck
        type={type}
        render={({ useDefaultComponent, ...props }) => {
          if (useDefaultComponent) {
            props = {
              ...props,
              onClick: () => {
                mutation.mutate({ type });
              },
              loading: mutation.isLoading,
            };
          }
          return (
            <Button
              {...props}
              color="secondary"
              type="button"
              onClick={(event) => {
                // Save cookie key to return url step
                document.cookie = `return-to=${window.location.href};path=/;max-age=3600;SameSite=Lax`;
                props && props.onClick && props?.onClick(event);
              }}>
              {t("connect")}
            </Button>
          );
        }}
      />
    </div>
  );
};

export { CalendarItem };
