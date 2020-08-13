import { useState, useCallback } from "react";
import api from "../../api/surprisesApi";

export default () => {
  const [surprise, setSurprise] = useState(null);
  const onSubmit = useCallback(async ({ name, dateOfBirth, country }) => {
    const { data } = await api.get(
      `/name/${name}/country/${country}/dob/${dateOfBirth.toDateString()}`
    );

    console.log(data);
    setSurprise(data);
  }, []);

  const clearSurprise = useCallback(() => {
    setSurprise(null);
  }, [surprise]);

  return { surprise, surpriseMe: onSubmit, clearSurprise };
};
