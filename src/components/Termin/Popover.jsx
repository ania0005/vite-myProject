import "react-datepicker/dist/react-datepicker.css";
import "./Termin.css";
import TerminForm from "./TerminForm";
import { Dialog, DialogBody } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, setItem } from "../../features/terminSlice";


const Popover = ({ onCancel, onSave }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.termins.selectedItem);
  dispatch(setItem(null))
 

  return (
    <Dialog
    className="dialog"
      isOpen={true}
      title="Neuer Termin"
      icon="info-sign"
      onClose={onCancel}
    >
      <DialogBody>
      <TerminForm onSave={onSave} onCancel={onCancel}  />
      </DialogBody>
    </Dialog>
  );
};

export default Popover;

