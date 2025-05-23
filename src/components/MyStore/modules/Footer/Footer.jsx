import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container footer__container">
      <img className="footer__logo" src="img/logo.svg"
        alt="Logo Mirano Flower Boutique"/>

      <address className="footer__address">
        <a className="footer__mail"
          href="mailto:Mirano@gmail.com">Mirano@gmail.com</a>

        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a className="footer__link" href="#" aria-label="канал в телеграм">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2.625C7.721 2.625 2.625 7.721 2.625 14C2.625 20.279 7.721 25.375 14 25.375C20.279 25.375 25.375 20.279 25.375 14C25.375 7.721 20.279 2.625 14 2.625ZM19.278 10.36C19.1074 12.1573 18.368 16.5253 17.9926 18.5386C17.8334 19.3918 17.5149 19.6761 17.2191 19.7103C16.5594 19.7671 16.0589 19.278 15.4219 18.8571C14.4209 18.1974 13.8521 17.7879 12.8853 17.1509C11.7591 16.4115 12.4871 16.002 13.1355 15.3423C13.3061 15.1716 16.2181 12.5212 16.275 12.2824C16.2829 12.2462 16.2818 12.2086 16.2719 12.173C16.262 12.1373 16.2436 12.1045 16.2181 12.0776C16.1499 12.0208 16.0589 12.0435 15.9792 12.0549C15.8769 12.0776 14.2844 13.1355 11.179 15.2285C10.724 15.5356 10.3145 15.6949 9.9505 15.6835C9.541 15.6721 8.7675 15.456 8.18738 15.2626C7.47075 15.0351 6.91337 14.91 6.95888 14.5119C6.98163 14.3071 7.266 14.1024 7.80063 13.8863C11.1221 12.4416 13.3289 11.4861 14.4323 11.0311C17.5945 9.71163 18.2429 9.48413 18.6751 9.48413C18.7661 9.48413 18.9823 9.50688 19.1188 9.62063C19.2325 9.71163 19.2666 9.83675 19.278 9.92775C19.2666 9.996 19.2894 10.2008 19.278 10.36Z"
                  fill="#D17D2F" />
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a className="footer__link" href="#" aria-label="YouTube-Kanal">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6667 17.4999L17.7217 13.9999L11.6667 10.4999V17.4999ZM25.1534 8.36492C25.305 8.91325 25.41 9.64825 25.48 10.5816C25.5617 11.5149 25.5967 12.3199 25.5967 13.0199L25.6667 13.9999C25.6667 16.5549 25.48 18.4333 25.1534 19.6349C24.8617 20.6849 24.185 21.3616 23.135 21.6533C22.5867 21.8049 21.5834 21.9099 20.0434 21.9799C18.5267 22.0616 17.1384 22.0966 15.855 22.0966L14 22.1666C9.11171 22.1666 6.06671 21.9799 4.86504 21.6533C3.81504 21.3616 3.13837 20.6849 2.84671 19.6349C2.69504 19.0866 2.59004 18.3516 2.52004 17.4183C2.43837 16.4849 2.40337 15.6799 2.40337 14.9799L2.33337 13.9999C2.33337 11.4449 2.52004 9.56659 2.84671 8.36492C3.13837 7.31492 3.81504 6.63825 4.86504 6.34659C5.41337 6.19492 6.41671 6.08992 7.95671 6.01992C9.47337 5.93825 10.8617 5.90325 12.145 5.90325L14 5.83325C18.8884 5.83325 21.9334 6.01992 23.135 6.34659C24.185 6.63825 24.8617 7.31492 25.1534 8.36492Z"
                  fill="#D17D2F" />
              </svg>
            </a>
          </li>

          
        </ul>
      </address>

      

      <p className="footer__copyright">©MIRANO, 2025</p>
    </div>
  </footer>
  )
}

export default Footer