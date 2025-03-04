import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, setItem } from "../../features/terminSlice";
import { Button, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import "./Termin.css";

const TerminForm = ({ onCancel }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.termins.selectedItem);

  const [formData, setFormData] = useState({
    name: "",
    terminDate: null,
    terminTime: null,
    birthdayDate: null,
    behandlung: "",
    id: Math.random(1000),
  });

  useEffect(() => {
    if (selectedItem) {
      setFormData({
        ...selectedItem,
        terminDate: selectedItem.terminDate
          ? new Date(selectedItem.terminDate)
          : null,
        terminTime: selectedItem.terminTime
          ? new Date(selectedItem.terminTime)
          : null,
        birthdayDate: selectedItem.birthdayDate
          ? new Date(selectedItem.birthdayDate)
          : null,
      });
    }
  }, [selectedItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date, key) => {
    setFormData((prev) => ({ ...prev, [key]: date }));
  };

  const handleTimeChange = (time) => {
    setFormData((prev) => ({ ...prev, terminTime: time }));
  };

  const handleSave = () => {
    const serializedData = {
      ...formData,
      terminDate: formData.terminDate
        ? formData.terminDate.toISOString()
        : null,
      terminTime: formData.terminTime
        ? formData.terminTime.toISOString()
        : null,
      birthdayDate: formData.birthdayDate
        ? formData.birthdayDate.toISOString()
        : null,
    };

    if (selectedItem) {
      dispatch(updateItem(serializedData));
    } else {
      dispatch(addItem(serializedData));
    }
    dispatch(setItem(null));
    onCancel();
  };

  return (
    <div className="form">
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Geburtsdatum"
          value={formData.birthdayDate}
          onChange={(date) => handleDateChange(date, "birthdayDate")}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Datum des Termins"
          value={formData.terminDate}
          onChange={(date) => handleDateChange(date, "terminDate")}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Terminszeit"
          value={formData.terminTime}
          onChange={handleTimeChange}
          ampm={false}
          views={["hours", "minutes"]}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
      <Select
        name="behandlung"
        value={formData.behandlung}
        onChange={handleInputChange}
        displayEmpty
        fullWidth
        variant="outlined"
      >
        <MenuItem value="" disabled>
          Behandlung auswählen
        </MenuItem>
        <MenuItem value="Ambulant">Ambulant</MenuItem>
        <MenuItem value="Stationär">Stationär</MenuItem>
      </Select>
      <div className="buttons">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Speichern
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Abbrechen
        </Button>
      </div>
    </div>
  );
};

export default TerminForm;
