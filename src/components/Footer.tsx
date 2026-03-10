import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
        <div className="font-body text-md sm:text-lg">
          <div className="grid sm:grid-cols-2 md:grid-cols-[3fr_1fr_1.5fr] text-white gap-8">
            <div className="text-xl sm:text-2xl font-body sm:col-span-2 md:col-span-1">
              Fostering reimagined. Now Foster is a Registered Charity in England and Wales number 1207932.
            </div>
            <div>
              <ul className="list-none">
                <li><Link className="hover:underline" href="/about_us">About us</Link></li>
                <li><Link className="hover:underline" href="/weekenders">Weekenders</Link></li>
                <li><a className="hover:underline" href="http://blog.nowfoster.org/">Our blog</a></li>
                <li><a target="_blank" className="hover:underline" href="mailto:hello@nowfoster.org">Contact us</a></li>
                <li><Link className="hover:underline" href="/privacy_policy">Privacy policy</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span>Connect</span>
                <div className="flex gap-2">
                  <a className="p-2 border border-white rounded-md" href="https://www.linkedin.com/company/nowfoster/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 256 256">
                      <g fill="#000" strokeMiterlimit="10" strokeWidth="1">
                        <path d="M1.48 29.91h18.657v60.01H1.48V29.91zM10.809.08c5.963 0 10.809 4.846 10.809 10.819 0 5.967-4.846 10.813-10.809 10.813C4.832 21.712 0 16.866 0 10.899 0 4.926 4.832.08 10.809.08M31.835 29.91h17.89v8.206h.255c2.49-4.72 8.576-9.692 17.647-9.692C86.514 28.424 90 40.849 90 57.007V89.92H71.357V60.737c0-6.961-.121-15.912-9.692-15.912-9.706 0-11.187 7.587-11.187 15.412V89.92H31.835V29.91z" transform="matrix(2.81 0 0 2.81 1.407 1.407)" fill="white" />
                      </g>
                    </svg>
                  </a>
                  <a className="p-2 border border-white rounded-md" href="https://www.instagram.com/nowfosteruk/">
                    <svg width="1.25rem" height="1.25rem" viewBox="0 0 38 38" fill="none">
                      <path d="M11.5 0C5.159 0 0 5.159 0 11.5V26.5C0 32.841 5.159 38 11.5 38H26.5C32.841 38 38 32.841 38 26.5V11.5C38 5.159 32.841 0 26.5 0H11.5ZM29 7C30.105 7 31 7.895 31 9C31 10.104 30.105 11 29 11C27.895 11 27 10.104 27 9C27 7.895 27.895 7 29 7ZM19 9C24.514 9 29 13.486 29 19C29 24.514 24.514 29 19 29C13.486 29 9 24.514 9 19C9 13.486 13.486 9 19 9ZM19 12C18.0807 12 17.1705 12.1811 16.3212 12.5328C15.4719 12.8846 14.7003 13.4002 14.0503 14.0503C13.4002 14.7003 12.8846 15.4719 12.5328 16.3212C12.1811 17.1705 12 18.0807 12 19C12 19.9193 12.1811 20.8295 12.5328 21.6788C12.8846 22.5281 13.4002 23.2997 14.0503 23.9497C14.7003 24.5998 15.4719 25.1154 16.3212 25.4672C17.1705 25.8189 18.0807 26 19 26C19.9193 26 20.8295 25.8189 21.6788 25.4672C22.5281 25.1154 23.2997 24.5998 23.9497 23.9497C24.5998 23.2997 25.1154 22.5281 25.4672 21.6788C25.8189 20.8295 26 19.9193 26 19C26 18.0807 25.8189 17.1705 25.4672 16.3212C25.1154 15.4719 24.5998 14.7003 23.9497 14.0503C23.2997 13.4002 22.5281 12.8846 21.6788 12.5328C20.8295 12.1811 19.9193 12 19 12V12Z" fill="white" />
                    </svg>
                  </a>
                  <a className="p-2 border border-white rounded-md" href="http://facebook.com/nowfosterorg">
                    <svg width="1.25rem" height="1.25rem" viewBox="0 0 13 24" fill="none">
                      <path d="M4 24V12H0V8H4V5.852C4 1.785 5.981 0 9.361 0C10.98 0 11.836 0.12 12.241 0.175V4H9.936C8.501 4 8 4.757 8 6.291V8H12.205L11.634 12H8V24H4Z" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
