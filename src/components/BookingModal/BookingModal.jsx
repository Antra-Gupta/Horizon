import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";
const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails,
    setUserDetails,
  } = useContext(UserDetailContext);

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{gap: "1rem"}}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;