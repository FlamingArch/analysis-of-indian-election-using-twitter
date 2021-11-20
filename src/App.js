import { motion } from "framer-motion";
import { HandIcon } from "@heroicons/react/outline";

function App() {
  return (
    <motion.div
      animate={{ scale: [1.2, 1], opacity: [0, 1] }}
      transition={{ duration: 0.4 }}
      className="grid h-screen w-screen place-content-center text-5xl font-light"
    >
      <div className="flex justify-center">
        <HandIcon className="w-12 h-12 rotate-45" />
        Hello, World!
      </div>
    </motion.div>
  );
}

export default App;
