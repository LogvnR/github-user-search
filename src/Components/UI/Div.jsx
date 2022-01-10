import { motion } from "framer-motion";

const Div = (props) => {
  return (
    <motion.div
      onClick={props.onClick}
      className={props.className}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Div;
