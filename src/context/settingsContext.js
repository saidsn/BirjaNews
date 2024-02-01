import {
  createContext,
  useContext,
  useEffect,
  useReducer
} from "react";
import {
  settingsActions,
  settingsReducer
} from "../reducers/settingsReducer";
import {
  settingsService
} from "../APIs/Services/settingsService";

const initialState = {
  data: {},
  loading: false,
  error: false,
};

const SettingsContext = createContext();
export const SettingsProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);
  useEffect(() => {
    (async () => {
      dispatch({
        type: settingsActions.start
      });
      try {
        const res = await settingsService.getAll();
        dispatch({
          type: settingsActions.success,
          payload: res.data
        });

      } catch (err) {
        console.error(err)
        dispatch({
          type: settingsActions.error,
          payload: err
        });

      }

    })();
  }, [dispatch]);
  return (
     <SettingsContext.Provider value = {
      {
        state,
        dispatch
      }
    }> {
      children
    } </SettingsContext.Provider>
  );
};

export default SettingsProvider;

export const useSettings = () => useContext(SettingsContext);