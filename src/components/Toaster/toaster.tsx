import React from "react";
import { useToast } from "@/hooks/use-toast";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./toast";

type ToastItem = {
  id: string | number;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
};

export function Toaster() {
  const { toasts } = useToast() as { toasts: ToastItem[] };

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}

export default Toaster;