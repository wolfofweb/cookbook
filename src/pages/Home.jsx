import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Diet from "../components/Diet";
import About from "../components/About";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <About />
      <Veggie />
      <Diet />
    </motion.div>
  );
}

export default Home;
