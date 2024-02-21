
export type AppAlertsContextProps = {
    /**
     * handle to display or re-display the alerts
     */
    displayAlerts: () => void;
    /**
     * handle to asynchronously fetch or re-fetch the list of alerts to be loaded into `appAlertsList`
     */
    fetchAlerts: () => Promise<void>;
    /**
     * handle to clear out the alerts in `appAlertsList`
     */
    clearAlerts: () => void;
    /**
     * handle to load custom alerts from any page/function
     */
    loadAlerts: (_: Array<AppAlert>) => void;
}