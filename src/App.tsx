import AppRouter from "./router/AppRouter";
import { Toaster } from "./components/ui/toast";

export default function App() {
  return (
    <div className="max-w-310 m-auto font-roboto">
      <Toaster>
        <AppRouter />
      </Toaster>
    </div>
  );
}
