import { AlertColor } from '@mui/material';

export type AlertMessage = {
  id: string;
  message: string;
  variant?: 'outlined' | 'standard' | 'filled';
  severity?: AlertColor;
  autoClose?: boolean;
  autoCloseDuration?: number;
};

export interface AlertContextProps {
  maxAlerts: number;
  pushAlert: (alert: Omit<AlertMessage, 'id' | 'in'>) => void;
  removeAlert: (alertId: string) => void;
}
