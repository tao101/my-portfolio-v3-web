import { useState } from 'react';
import SectionTitle from '../sectionTitle';
import { uid } from 'uid';
import { toast } from 'react-toastify';

export default function Contact({ settings }) {
  //console.log('categories ', categories);
  let contactPhones = settings?.contactPhones;
  let contactEmails = settings?.contactEmails;
  let contactAddress = settings?.contactAddresses;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    //todo: add logic for form submit
    //console.log('onSubmit');

    try {
      let result = await fetch('/api/sendContact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      result = await result.json();
      console.log('result ', result);
      if (result?.status) {
        toast.success('Contact Request Sent ✅', {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        console.log('There was an error sending the Contact Request');
        console.log(result);
        toast.error('There was an error sending the Contact Request ❌', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.log('There was an error sending the Contact Request');
      console.log(error);
      toast.error('There was an error sending the Contact Request ❌', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } finally {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <section
      id="contact"
      className="mt-12 mb-12 z-20 flex flex-col  justify-center items-center  "
    >
      <SectionTitle title="CONTACT US" subTitle="CONTACT" />
      <div className="w-full flex-wrap flex flex-col lg:flex-row justify-center gap-x-8 gap-y-8  lg:items-stretch pt-6 lg:pt-14">
        <div className="flex-1 flex flex-col justify-between ">
          <div>
            <h4 className="mb-3 text-[22px] text-white antialiased font-semibold">
              {settings?.contactTitle}
            </h4>
            <p className="mb-3 text-[#bfbecb] antialiased ">
              {settings?.contactDescription}
            </p>
          </div>
          <span className="inline-block h-1 w-20 my-2 rounded-full bg-secondary-400 bg-opacity-20"></span>
          {contactPhones?.length > 0 && (
            <div className="my-3 card hovercard circleprogress p-4 md:p-5 flex ">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-secondary-400 bg-opacity-10 text-3xl text-secondary-400">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
                    ></path>
                  </g>
                </svg>
              </span>
              <div>
                <h5 className="mb-2 text-white font-medium text-lg">
                  Contact on phone
                </h5>
                {contactPhones?.map((phone) => {
                  let fullText = phone;
                  let rawPhone = phone.split(' ')[0];
                  let formatedPhone =
                    fullText.substring(0, 4) +
                    '-' +
                    fullText.substring(4, 8) +
                    '-' +
                    fullText.substring(8, fullText.length);
                  return (
                    <p
                      key={uid(32)}
                      className="antialiased text-[#bfbecb] hover:text-secondary-400 mb-2"
                    >
                      <a href={`tel:${rawPhone}`}>{formatedPhone}</a>
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {contactEmails?.length > 0 && (
            <div className="my-3 card hovercard circleprogress p-4 md:p-5 flex ">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-secondary-400 bg-opacity-10 text-3xl text-secondary-400">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
                  </g>
                </svg>
              </span>
              <div>
                <h5 className="mb-2 text-white font-medium text-lg">
                  Contact on mail
                </h5>
                {contactEmails?.map((email) => {
                  return (
                    <p
                      key={uid(32)}
                      className="antialiased text-[#bfbecb] hover:text-secondary-400 mb-2"
                    >
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {contactAddress?.length > 0 && (
            <div className="my-3 card hovercard circleprogress p-4 md:p-5 flex  mb-0">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-secondary-400 bg-opacity-10 text-3xl text-secondary-400">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
                  </g>
                </svg>
              </span>
              <div>
                <h5 className="mb-2 text-white font-medium text-lg">
                  Contact address
                </h5>
                {contactAddress?.map((address) => {
                  return (
                    <p
                      key={uid(32)}
                      className="antialiased flex gap-2 text-[#bfbecb] hover:text-secondary-400 mb-2"
                    >
                      {address} <span className="hidden lg:block">➡️</span>
                      <span className="flex lg:hidden">⏬</span>
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 card hovercard circleprogress">
          <form
            onSubmit={onSubmit}
            className="w-full h-full flex flex-col justify-between  p-4 md:p-5 space-y-4 "
          >
            <div className="flex flex-col w-full text-white text-sm	antialiased ">
              <label className="mb-1.5">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                required
                name="name"
                className="flex-1 px-4 py-2 bg-transparent h-2 text-base text-[#bfbecb] hover:border-secondary-400 active:border-secondary-400 focus:outline-none focus:ring focus:ring-secondary-400"
                placeholder="Enter your name..."
              />
            </div>
            <div className="flex flex-col w-full text-white text-sm	antialiased">
              <label className="mb-1.5">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                required
                className="flex-1 px-4 py-2 bg-transparent h-2 text-base	 text-[#bfbecb] hover:border-secondary-400 focus:outline-none focus:ring focus:ring-secondary-400"
                placeholder="Enter your email..."
              />
            </div>
            <div className="flex flex-col w-full text-white text-sm	antialiased ">
              <label className="mb-1.5">Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                name="subject"
                required
                className="flex-1 px-4 py-2 bg-transparent h-2 text-base text-[#bfbecb] hover:border-secondary-400 focus:outline-none focus:ring focus:ring-secondary-400"
                placeholder="Enter  subject..."
              />
            </div>
            <div className="flex flex-1  flex-col w-full text-white text-sm	antialiased ">
              <label className="mb-1.5">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                id="subject"
                name="subject"
                required
                cols="1"
                rows="5"
                className="flex-1 px-4  py-2 bg-transparent h-2 text-base text-[#bfbecb] hover:border-secondary-400 focus:outline-none focus:ring focus:ring-secondary-400"
                placeholder="Enter your message..."
              />
            </div>
            <button
              name="submit"
              type="submit"
              className="bg-secondary-400 py-2.5 px-5 rounded w-fit hover:scale-110 active:scale-90 "
            >
              SEND MAIL
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
