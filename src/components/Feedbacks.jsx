import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({
  index,
  name,
  designation,
  testimonial,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
  >
    <p className=" text-[48px] font-black text-white">&quot;</p>
    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{testimonial}</p>
      <div className=" mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className=" text-[16px] font-medium text-white">
            <span className=" blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-[12px] text-secondary">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 rounded-[20px] bg-black-100`}>
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What other say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap items-center justify-center gap-7 pb-14`}
      >
        {testimonials.map((test, index) => (
          <FeedbackCard key={test.name} index={index} {...test} />
        ))}
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  index: PropTypes.bool.isRequired,
  name: PropTypes.bool.isRequired,
  designation: PropTypes.bool.isRequired,
  testimonial: PropTypes.bool.isRequired,
  company: PropTypes.bool.isRequired,
  image: PropTypes.bool.isRequired,
};

export default SectionWrapper(Feedbacks, '');
