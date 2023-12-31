import { DepositForm } from '@/app/deposit/form';
import Modal from '@/components/modal';
import { DialogDescription, DialogTitle } from '@/components/ui/dialog';

export default function DepositModal() {
  return (
    <Modal>
      <DialogTitle>Deposit Money</DialogTitle>
      <DialogDescription asChild>
        <DepositForm />
      </DialogDescription>
    </Modal>
  );
}
