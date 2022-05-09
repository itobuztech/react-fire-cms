import React from 'react';

export default function Star({
  className,
  filled = true,
}: {
  className?: string;
  filled?: boolean;
}) {
  if (filled) {
    return (
      <svg
        width="12"
        height="16"
        viewBox="0 0 20 19"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M4.43558 17.9806L4.44171 17.9854C4.44382 17.987 4.44565 17.9883 4.44718 17.9894C4.45009 17.9891 4.45396 17.9885 4.45885 17.9876L4.45907 17.9875C4.54623 17.9708 4.69489 17.9137 4.91052 17.7595L9.5779 14.3273L10.0218 14.0009L10.466 14.3269L15.1424 17.7592C15.3582 17.9136 15.507 17.9708 15.5942 17.9875L15.5944 17.9876C15.5993 17.9885 15.6031 17.9891 15.606 17.9894C15.6076 17.9883 15.6094 17.987 15.6115 17.9854L15.6177 17.9806L15.624 17.9759C15.6421 17.9624 15.6472 17.9542 15.6487 17.9517C15.6504 17.949 15.6571 17.9373 15.6621 17.9077L15.6621 17.9075C15.6723 17.8463 15.6715 17.7071 15.5841 17.4586L15.5806 17.4486L15.5806 17.4486L13.7351 11.9563L13.5588 11.4316L14.0082 11.1085L18.7234 7.7178L18.7303 7.71283L18.7303 7.71287C18.95 7.55866 19.0376 7.44302 19.0683 7.38328C19.0747 7.37086 19.0776 7.36248 19.079 7.35793C19.0803 7.35352 19.0805 7.35128 19.0806 7.35052C19.0806 7.34978 19.0807 7.34806 19.0803 7.34452C19.0799 7.34118 19.0788 7.33476 19.0758 7.32485C19.0744 7.32102 19.0732 7.31795 19.0721 7.31552C19.0709 7.31284 19.0699 7.31095 19.0692 7.30971C19.0685 7.30843 19.0678 7.30745 19.0673 7.30667C19.0667 7.30589 19.0663 7.30531 19.0658 7.3048L19.0658 7.30476C19.0649 7.3037 19.0567 7.2943 19.0302 7.2807L19.0301 7.28064C18.974 7.25175 18.837 7.20877 18.565 7.21346L18.5566 7.21361V7.21356L12.7729 7.24889L12.2211 7.25226L12.0536 6.72644L10.2975 1.2108C10.2121 0.950619 10.1259 0.825269 10.0743 0.772771L10.6094 0.247241L10.0743 0.772769C10.065 0.763284 10.0585 0.758305 10.0551 0.75599C10.052 0.753798 10.0504 0.753155 10.0502 0.753042L10.0502 0.753036L10.0501 0.753029C10.0499 0.752917 10.0486 0.752381 10.0454 0.751757C10.0419 0.75109 10.0346 0.75 10.0222 0.75C10.0126 0.75 10.0074 0.750867 10.0058 0.751186C10.0043 0.751482 10.0043 0.751611 10.0047 0.75144C10.005 0.751285 10.0036 0.751825 9.99996 0.754334C9.99623 0.756934 9.98908 0.762445 9.97894 0.772771L9.97893 0.77278C9.92737 0.825271 9.8412 0.950598 9.75576 1.21073L7.99955 6.72645L7.83213 7.25226L7.28032 7.24889L1.49666 7.21356L1.48831 7.21351L1.48831 7.21346C1.21626 7.20877 1.07926 7.25176 1.02307 7.28065L1.02306 7.28066C0.996596 7.29427 0.988449 7.30366 0.987534 7.30472L0.987501 7.30476C0.986612 7.30578 0.985551 7.30715 0.984118 7.30969C0.982781 7.31207 0.980361 7.31682 0.977507 7.3249C0.974474 7.33479 0.973392 7.3412 0.972981 7.34453C0.972546 7.34806 0.972653 7.34978 0.972715 7.35052C0.972777 7.35127 0.973003 7.35351 0.974306 7.35791C0.975651 7.36246 0.978599 7.37083 0.984983 7.38325L0.984988 7.38326C1.01573 7.44304 1.10332 7.55869 1.32295 7.71291L1.32986 7.71776L1.32984 7.7178L6.04507 11.1085L6.49444 11.4316L6.31815 11.9563L4.47266 17.4486L4.46929 17.4586L4.46922 17.4586L4.43558 17.9806ZM4.43558 17.9806L4.42934 17.976M4.43558 17.9806L4.42934 17.976M4.42934 17.976C4.41116 17.9625 4.40608 17.9543 4.40456 17.9518M4.42934 17.976L4.40456 17.9518M4.40456 17.9518C4.40285 17.9489 4.39609 17.9373 4.39115 17.9076L4.40456 17.9518Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="12"
        height="16"
        viewBox="0 0 20 19"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M4.43558 17.9806L4.44171 17.9854C4.44382 17.987 4.44565 17.9883 4.44718 17.9894C4.45009 17.9891 4.45396 17.9885 4.45885 17.9876L4.45907 17.9875C4.54623 17.9708 4.69489 17.9137 4.91052 17.7595L9.5779 14.3273L10.0218 14.0009L10.466 14.3269L15.1424 17.7592C15.3582 17.9136 15.507 17.9708 15.5942 17.9875L15.5944 17.9876C15.5993 17.9885 15.6031 17.9891 15.606 17.9894C15.6076 17.9883 15.6094 17.987 15.6115 17.9854L15.6177 17.9806L15.624 17.9759C15.6421 17.9624 15.6472 17.9542 15.6487 17.9517C15.6504 17.949 15.6571 17.9373 15.6621 17.9077L15.6621 17.9075C15.6723 17.8463 15.6715 17.7071 15.5841 17.4586L15.5806 17.4486L15.5806 17.4486L13.7351 11.9563L13.5588 11.4316L14.0082 11.1085L18.7234 7.7178L18.7303 7.71283L18.7303 7.71287C18.95 7.55866 19.0376 7.44302 19.0683 7.38328C19.0747 7.37086 19.0776 7.36248 19.079 7.35793C19.0803 7.35352 19.0805 7.35128 19.0806 7.35052C19.0806 7.34978 19.0807 7.34806 19.0803 7.34452C19.0799 7.34118 19.0788 7.33476 19.0758 7.32485C19.0744 7.32102 19.0732 7.31795 19.0721 7.31552C19.0709 7.31284 19.0699 7.31095 19.0692 7.30971C19.0685 7.30843 19.0678 7.30745 19.0673 7.30667C19.0667 7.30589 19.0663 7.30531 19.0658 7.3048L19.0658 7.30476C19.0649 7.3037 19.0567 7.2943 19.0302 7.2807L19.0301 7.28064C18.974 7.25175 18.837 7.20877 18.565 7.21346L18.5566 7.21361V7.21356L12.7729 7.24889L12.2211 7.25226L12.0536 6.72644L10.2975 1.2108C10.2121 0.950619 10.1259 0.825269 10.0743 0.772771L10.6094 0.247241L10.0743 0.772769C10.065 0.763284 10.0585 0.758305 10.0551 0.75599C10.052 0.753798 10.0504 0.753155 10.0502 0.753042L10.0502 0.753036L10.0501 0.753029C10.0499 0.752917 10.0486 0.752381 10.0454 0.751757C10.0419 0.75109 10.0346 0.75 10.0222 0.75C10.0126 0.75 10.0074 0.750867 10.0058 0.751186C10.0043 0.751482 10.0043 0.751611 10.0047 0.75144C10.005 0.751285 10.0036 0.751825 9.99996 0.754334C9.99623 0.756934 9.98908 0.762445 9.97894 0.772771L9.97893 0.77278C9.92737 0.825271 9.8412 0.950598 9.75576 1.21073L7.99955 6.72645L7.83213 7.25226L7.28032 7.24889L1.49666 7.21356L1.48831 7.21351L1.48831 7.21346C1.21626 7.20877 1.07926 7.25176 1.02307 7.28065L1.02306 7.28066C0.996596 7.29427 0.988449 7.30366 0.987534 7.30472L0.987501 7.30476C0.986612 7.30578 0.985551 7.30715 0.984118 7.30969C0.982781 7.31207 0.980361 7.31682 0.977507 7.3249C0.974474 7.33479 0.973392 7.3412 0.972981 7.34453C0.972546 7.34806 0.972653 7.34978 0.972715 7.35052C0.972777 7.35127 0.973003 7.35351 0.974306 7.35791C0.975651 7.36246 0.978599 7.37083 0.984983 7.38325L0.984988 7.38326C1.01573 7.44304 1.10332 7.55869 1.32295 7.71291L1.32986 7.71776L1.32984 7.7178L6.04507 11.1085L6.49444 11.4316L6.31815 11.9563L4.47266 17.4486L4.46929 17.4586L4.46922 17.4586L4.43558 17.9806ZM4.43558 17.9806L4.42934 17.976M4.43558 17.9806L4.42934 17.976M4.42934 17.976C4.41116 17.9625 4.40608 17.9543 4.40456 17.9518M4.42934 17.976L4.40456 17.9518M4.40456 17.9518C4.40285 17.9489 4.39609 17.9373 4.39115 17.9076L4.40456 17.9518Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
}
