import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exper, index) => (
            <ExperienceCard key={index} exper={exper} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const ExperienceCard = ({ exper }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={exper.date}
    iconStyle={{ background: exper.iconBg }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={exper.icon}
          alt={exper.company_name}
          className="h-[60%] w-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[24px] font-bold text-white">{exper.title}</h3>
      <p
        className="text-[16px] font-semibold text-secondary"
        style={{ margin: 0 }}
      >
        {exper.company_name}
      </p>
    </div>
    <ul className="ml-5 mt-5 list-disc space-y-2">
      {exper.points.map((point, index) => (
        <li
          key={`exper-point-${index}`}
          className=" pl-1 text-[14px] tracking-wider text-white-100"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

ExperienceCard.propTypes = {
  exper: PropTypes.bool.isRequired,
};

export default SectionWrapper(Experience, 'work');
