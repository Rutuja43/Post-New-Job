

import { FaBars, FaBell, FaCommentDots, FaSearch } from 'react-icons/fa';
import styles from './PostNewJob.module.css'; // Import the CSS module
import JobHeader from './components/JobHeader';

export default function PostNewJob() {
  return (
    <div className={styles.minHScreen}>
      {/* Top Navigation */}
      <header className={`${styles.header} ${styles.flexItemsCenter} ${styles.justifyBetween}`}>
        <div className={`${styles.flexItemsCenter} ${styles.spaceX4}`}>
          <FaBars className={`${styles.textXl} ${styles.cursorPointer}`} />
          <div className={`${styles.relative} ${styles.w72} ${styles.hiddenMdBlock}`}>
            <input
              type="text"
              placeholder="Search by name, email, contact or location"
              className={styles.searchInput}
            />
            <FaSearch className={styles.searchIcon} />
          </div>
        </div>

        <div className={`${styles.flexItemsCenter} ${styles.spaceX5}`}>
          <FaCommentDots className={`${styles.textXl} ${styles.textGray600} ${styles.relative}`}>
            <span className={`${styles.absolute} ${styles.notificationBadge}`}></span>
          </FaCommentDots>
          <FaBell className={`${styles.textXl} ${styles.textGray600} ${styles.relative}`}>
            <span className={`${styles.absolute} ${styles.notificationBadge}`}></span>
          </FaBell>
          <img
            src="/profile.jpg" // replace with the correct path
            alt="User"
            className={styles.profileImage}
          />
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <JobHeader />

        {/* Steps */}
        <h1 className={styles.h1TextXl}>Post a New Job</h1>
        <div className={`${styles.flexJustifyCenter} ${styles.spaceX8} ${styles.mb8}`}>
          <div className={styles.textAlign}>
            <div className={styles.stepCircle}>1</div>
            <p className={styles.stepText}>Job Details</p>
          </div>
          <div className={styles.textAlign}>
            <div className={styles.stepCircleGray}>2</div>
            <p className={styles.stepText}>Payment and Package</p>
          </div>
          <div className={styles.textAlign}>
            <div className={styles.stepCircleGray}>3</div>
            <p className={styles.stepText}>Confirmation</p>
          </div>
        </div>

        {/* Form */}
        <form className={styles.formSpaceY6}>
          <h1 className={styles.formH1TextXl}>Job Details</h1>
          <div>
            <label className={styles.label}>Job Title</label>
            <input
              type="text"
              placeholder="E.g Senior UI/UX designer"
              className={styles.inputField}
            />
          </div>
          <div>
            <label className={styles.label}>Add your job description *</label>
            <textarea
              rows={4}
              placeholder="Description"
              className={styles.textareaField}
            ></textarea>
          </div>
          <div className={styles.gridCols1MdCols3}>
            <div>
              <label className={styles.label}>Job Location</label>
              <input
                type="text"
                placeholder="e.g Pune"
                className={styles.inputField}
              />
            </div>
            <div>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                className={styles.inputField}
              />
            </div>
            <div>
              <label className={styles.label}>Company Name</label>
              <input
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.gridCols1MdCols2}>
            <div>
              <label className={styles.label}>Application Deadline *</label>
              <input
                type="date"
                className={styles.inputField}
              />
            </div>
            <div>
              <label className={styles.label}>Job Type</label>
              <select className={styles.selectField}>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          <div>
            <label className={styles.label}>Required Skills</label>
            <input
              type="text"
              placeholder="Add Skill"
              className={styles.inputField}
            />
          </div>

          <div>
            <label className={styles.label}>Suggested Skills</label>
            <div className={`${styles.flexWrap} ${styles.gap2} ${styles.mt1}`}>
              <span className={styles.suggestedSkill}>
                + Accounting
              </span>
              <span className={styles.suggestedSkill}>
                + Accounting
              </span>
              <span className={styles.suggestedSkill}>
                + Accounting
              </span>
              <span className={styles.suggestedSkill}>
                + Accounting
              </span>
              <span className={styles.suggestedSkill}>
                + Accounting
              </span>
            </div>
          </div>

          <div>
            <label className={styles.label}>Salary</label>
            <input
              type="text"
              placeholder="e.g 20LPA"
              className={styles.inputField}
            />
          </div>

          <div className={styles.gridCols1MdCols2}>
            <div>
              <label className={styles.label}>Experience</label>
              <input
                type="text"
                placeholder="e.g 5+ year"
                className={styles.inputField}
              />
            </div>
            <div>
              <label className={styles.label}>Gender</label>
              <input
                type="text"
                placeholder="e.g female"
                className={styles.inputField}
              />
            </div>
          </div>

          <div>
            <label className={styles.label}>Industry</label>
            <input
              type="text"
              placeholder="e.g finance"
              className={styles.inputField}
            />
          </div>

          <h2 className={`${styles.formH1TextXl} ${styles.mt8}`}>Address / Location</h2>
          <div className={styles.gridCols1MdCols2}>
            <div>
              <label className={styles.label}>Country</label>
              <input
                type="text"
                placeholder="e.g select country"
                className={styles.inputField}
              />
            </div>
            <div>
              <label className={styles.label}>State</label>
              <input
                type="text"
                placeholder="e.g select state"
                className={styles.inputField}
              />
            </div>
            <div>
              <label className={styles.label}>City</label>
              <input
                type="text"
                placeholder="e.g select city"
                className={styles.inputField}
              />
            </div>
            <div>
              <label className={styles.label}>Postal Code</label>
              <input
                type="text"
                placeholder="Enter code"
                className={styles.inputField}
              />
            </div>
          </div>
          <div>
            <label className={styles.label}>Full Address</label>
            <textarea
              rows={3}
              placeholder="e.g Add address"
              className={styles.textareaField}
            ></textarea>
          </div>

          <div className={`${styles.textRight} ${styles.mt6}`}>
            <button type="submit" className={styles.postJobButton}>
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}