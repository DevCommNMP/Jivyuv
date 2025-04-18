const passwordResetMailOptions = (  emailReceiver,
  emailSender,
  emailSubject,
  emailHeader,
  greetMessage,
  companyMessage,
  displayName,
  logoImage,
  registrationImage,
  websiteName,
  BASE_URL,
  supportEmail,
  supportPhone,
  supportAddress,
  socilaLinkLinkedin,
  socialLinkFacebook,
  socialLinkTwitter,
  socialLinkInstagram,
  socialLinkYoutube) => {
  const mailOptions = {
    from: {
      name: `${emailHeader}`,
      address: `${emailSender}`, // Sender email
    },
    to: `${emailReceiver}`, // Receiver email
    subject: `${emailSubject}`, // Subject line
    text: `${greetMessage}`,
    html: `<html
        lang="en"
      >
        <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  
          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
      
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
      
            p {
              line-height: inherit;
            }
      
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
      
            .image_block img + div {
              display: none;
            }
      
            @media (max-width: 660px) {
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                display: inline-block !important;
              }
      
              .icons-inner {
                text-align: center;
              }
      
              .icons-inner td {
                margin: 0 auto;
              }
      
              .image_block img.fullWidth {
                max-width: 100% !important;
              }
      
              .mobile_hide {
                display: none;
              }
      
              .row-content {
                width: 100% !important;
              }
      
              .stack .column {
                width: 100%;
                display: block;
              }
      
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
      
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: rgb(244, 236, 250);
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #f8f8f9;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #083dad;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #083dad;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 4px solid #083dad;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #fff;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  ></table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-4"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="padding-bottom: 0px; padding-top: 36px"
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0px solid #bbbbbb;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          width: 100%;
                                        "
                                      >
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px"
                                        >
                                          <img
                                            alt="logo image"
                                            class="fullWidth"
                                            src=${logoImage}
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 170px;
                                              width: 100%;
                                              margin-bottom: 2rem;
                                            "
                                            title="I'm an image"
                                            width="352"
                                          />
                                          <img
                                            alt="I'm an image"
                                            class="fullWidth"
                                             src=${registrationImage}
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 290px;
                                              width: 100%;
                                            "
                                            title="I'm an image"
                                            width="352"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad" style="padding-top: 50px">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0px solid #bbbbbb;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #555555;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 30px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 36px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            <span style="color: #2b303a"
                                              ><strong
                                                >Password Reset Link</strong
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-5"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #555555;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 15px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 22.5px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
  ${greetMessage}                                            
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="button_block block-6"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-left: 10px;
                                          padding-right: 10px;
                                          padding-top: 15px;
                                          text-align: center;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:62px;width:203px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#e44fa4"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]-->
                                          <div
                                            style="
                                              text-decoration: none;
                                              display: inline-block;
                                              color: #ffffff;
                                              background-color: #083dad;
                                              border-radius: 60px;
                                              width: auto;
                                              border-top: 0px solid transparent;
                                              font-weight: undefined;
                                              border-right: 0px solid transparent;
                                              border-bottom: 0px solid transparent;
                                              border-left: 0px solid transparent;
                                              padding-top: 15px;
                                              padding-bottom: 15px;
                                              font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-border-alt: none;
                                              word-break: keep-all;
                                            "
                                          >
                                            <span
                                              style="
                                                padding-left: 30px;
                                                padding-right: 30px;
                                                font-size: 16px;
                                                display: inline-block;
                                                letter-spacing: normal;
                                              "
                                              ><span
                                                style="
                                                  margin: 0;
                                                  word-break: break-word;
                                                  line-height: 32px;
                                                "
                                                ><a
                                                  style="
                                                    text-decoration: none;
                                                    color: white;
                                                  "
                                                  href=${BASE_URL}
                                                  ><strong
                                                    >Reset Password</strong
                                                  ></a
                                                ></span
                                              ></span
                                            >
                                          </div>
                                          <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-7"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 12px;
                                          padding-top: 60px;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0px solid #bbbbbb;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-5"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-6"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #2b303a;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 4px solid #083dad;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  ></table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="social_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-right: 10px;
                                          padding-top: 28px;
                                          text-align: center;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="social-table"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              display: inline-block;
                                            "
                                            width="208px"
                                          >
                                            <tr>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href=${socialLinkFacebook}
                                                  target="_blank"
                                                  ><img
                                                    alt="Facebook"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_facebook.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="Facebook"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href=${socialLinkTwitter}
                                                  target="_blank"
                                                  ><img
                                                    alt="Twitter"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_twitter.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="Twitter"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href=${socialLinkInstagram}
                                                  target="_blank"
                                                  ><img
                                                    alt="Instagram"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_instagram.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="Instagram"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href=${socialLinkYoutube}
                                                  target="_blank"
                                                  ><img
                                                    alt="LinkedIn"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_pinterest.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="LinkedIn"
                                                    width="32"
                                                /></a>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 15px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #f8f8f8;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 12px;
                                            line-height: 150%;
                                            text-align: left;
                                            mso-line-height-alt: 18px;
                                          "
                                        >
                                          <p style="margin: 0">
  ${companyMessage}                                          <ul>
                                                                                  <li>
 ${supportAddress}                                                                                  </li>
                                                                                <li>${supportPhone}</li>
                                                       
                                                                                  <li>${supportEmail}n</li>
                                                                                </ul>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-5"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 25px;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 1px solid #555961;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-6"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 30px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 20px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #f8f8f8;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 12px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 14.399999999999999px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            <span style="color: #f8f8f8"
                                              >
                                              <span
                                                id="c2e0ec35-b4ce-44fc-9c78-fa5cec49c8ec"
                                                > <p style="color: #f8f8f8">&copy;2025 ${websiteName}. All rights reserved.</p>
  
  </span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-7"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="icons_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          vertical-align: middle;
                                          color: #9d9d9d;
                                          font-family: inherit;
                                          font-size: 15px;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          text-align: center;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                          width="100%"
                                        >
                                          <tr>
                                            <td
                                              class="alignment"
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                              "
                                            >
                                              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                              <!--[if !vml]><!-->
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="icons-inner"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  display: inline-block;
                                                  margin-right: -4px;
                                                  padding-left: 0px;
                                                  padding-right: 0px;
                                                "
                                              >
                                                <!--<![endif]-->
                                                <tr>
                                                  <td
                                                    style="
                                                      vertical-align: middle;
                                                      text-align: center;
                                                      padding-top: 5px;
                                                      padding-bottom: 5px;
                                                      padding-left: 5px;
                                                      padding-right: 6px;
                                                    "
                                                  ></td>
                                                  <td
                                                    style="
                                                      font-family: Montserrat,
                                                        Trebuchet MS, Lucida Grande,
                                                        Lucida Sans Unicode,
                                                        Lucida Sans, Tahoma,
                                                        sans-serif;
                                                      font-size: 15px;
                                                      color: #9d9d9d;
                                                      vertical-align: middle;
                                                      letter-spacing: undefined;
                                                      text-align: center;
                                                    "
                                                  >
                                                    <a
                                                      href="https://www.linkedin.com/in/aaditya-singh-8472991b7/"
                                                      style="
                                                        color: #9d9d9d;
                                                        text-decoration: none;
                                                      "
                                                      target="_blank"
                                                      >Developed & Designed by:
                                                      <strong
                                                        >Aditya Singh</strong
                                                      ></a
                                                    >
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
        </body>
      </html>`, // Use message parameter here
  };

  return mailOptions;
};

module.exports = passwordResetMailOptions;
