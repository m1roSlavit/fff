import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const useError = (error: string) => {
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }, [error]);
};
