import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialLinks = [
  {
    href: "mailto:emir.metis.sen@gmail.com",
    label: "Email",
    icon: <EmailIcon style={{ width: "70%", height: "70%" }} />,
  },
  {
    href: "https://www.linkedin.com/in/emir-sen-522475271/",
    label: "LinkedIn",
    icon: <LinkedInIcon style={{ width: "70%", height: "70%" }} />,
  },
  {
    href: "https://github.com/Emiiir95",
    label: "GitHub",
    icon: <GitHubIcon style={{ width: "70%", height: "70%" }} />,
  },
];

export function SocialHorizontal() {
  return (
    <>
      {/* CSS intégré */}
      <style>{`
        ul {
          list-style: none;
        }
        .example-2 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .example-2 .icon-content {
          margin: 0 10px;
          position: relative;
        }
        .example-2 .icon-content .tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          padding: 6px 10px;
          border-radius: 5px;
          opacity: 0;
          visibility: hidden;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .example-2 .icon-content:hover .tooltip {
          opacity: 1;
          visibility: visible;
          top: -50px;
        }
        .example-2 .icon-content a {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: #4d4d4d;
          background-color: #000;
          transition: all 0.3s ease-in-out;
        }
        .example-2 .icon-content a:hover {
          box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
        }
        .example-2 .icon-content a svg {
          position: relative;
          z-index: 1;
          width: 30px;
          height: 30px;
        }
        .example-2 .icon-content a:hover {
          color: white;
        }
        .example-2 .icon-content a .filled {
          position: absolute;
          top: auto;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background-color: #232323;
          transition: all 0.3s ease-in-out;
        }
        .example-2 .icon-content a:hover .filled {
          height: 100%;
        }
        .example-2 .icon-content a[data-social="linkedin"] .filled,
        .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
          background-color: #0274b3;
        }
        .example-2 .icon-content a[data-social="github"] .filled,
        .example-2 .icon-content a[data-social="github"] ~ .tooltip {
          background-color: #24262a;
        }
        .example-2 .icon-content a[data-social="instagram"] .filled,
        .example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
          background: linear-gradient(
            45deg,
            #405de6,
            #5b51db,
            #b33ab4,
            #c135b4,
            #e1306c,
            #fd1f1f
          );
        }
        .example-2 .icon-content a[data-social="youtube"] .filled,
        .example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
          background-color: #ff0000;
        }
        .example-2 .icon-content a[data-social="email"] .filled,
        .example-2 .icon-content a[data-social="email"] ~ .tooltip {
          background-color: #d93025; /* Rouge typique de Gmail */
        }
        .example-2 .icon-content a[data-social="email"]:hover {
          color: white;
        }
        .example-2 .icon-content a[data-social="email"]:hover .filled {
          height: 100%;
        }
      `}</style>

      <ul className="example-2 border-[#27272A] border-2 backdrop-blur-sm rounded-2xl p-3">
        {socialLinks.map((link, index) => (
          <li key={index} className="icon-content">
            <a
              href={link.href}
              aria-label={link.label}
              data-social={link.label.toLowerCase()}
            >
              <div className="filled"></div>
              {link.icon}
            </a>
            <div className="tooltip">{link.label}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
