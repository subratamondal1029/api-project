# Course Application Workflow

This project involves creating a course application process that allows users to fill out an application form, upload images, and receive a confirmation email. The workflow leverages various JavaScript libraries, APIs for an efficient and interactive experience.

## Libraries and APIs Used

### JavaScript Libraries

- **jsPDF**: Used to create PDFs from HTML content.
  - [jsPDF Documentation](https://pdfmake.github.io/docs/0.1/)
- **SweetAlert**: Used to create pop-up alerts for user interaction.
  - [SweetAlert Documentation](https://github.com/sweetalert2/sweetalert2.github.io)
- **Swiper.js**: Used to create touch-enabled sliders or carousels.
  - [Swiper.js Documentation](https://swiperjs.com/swiper-api)
- **Typed.js**: Used to create typewriter effects for text content.
  - [Typed.js Documentation](https://github.com/mattboldt/typed.js/)

### APIs

- **Google Apps Script**: A scripting platform for Google Workspace apps like Sheets and Drive.
  - [Google Apps Script Documentation](https://developers.google.com/apps-script)
- **Fetch API**: A modern browser API to request data from servers.
  - [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- **Postal Pincode API**: Used to fetch location data based on postal pincode.
  - [Example Postal Pincode API](https://www.postalpincodeapi.com/)

## Workflow

### User Application Process

1. **Form Submission**
   - User fills out the application form and uploads multiple images and convert into a PDF using **jsPDF**
   - The application form data and images are submitted using the Fetch API.

2. **Fetch Data from Postal Pincode API**
   - Upon entering the postal pincode, the system fetches location data (such as contry, District, state and post Office) using the Postal Pincode API and populates the relevant fields in the application form.

3. **Processing with Google Apps Script**
   - A Google Apps Script receives the application data and performs the following actions:
     - Send the document's PDF to Google Drive and get the file link.
     - Adds this link in the Google Sheet.

4. **Email Confirmation**
   - The Google Apps Script sends email confirmations to:
     - The applicant with a confirmation message.
     - The company owner get mail as notification about a new application.

### Implementation Details

- **Upload and Convert Images to PDF**: Users can upload multiple images. These images, along with application details, are converted into a single PDF using jsPDF.
- **Save to Google Drive**: The created PDF is saved to Google Drive, and a shareable link is generated.
- **Store Link in Google Sheet**: The link to the PDF is stored in a Google Sheet alongside the applicant's data.
- **Send Confirmation Emails**: Confirmation emails are sent to both the applicant and the company owner. The email to the applicant contains a text message confirming the submission.


## Resources

- [jsPDF Documentation](https://pdfmake.github.io/docs/0.1/)
- [SweetAlert Documentation](https://github.com/sweetalert2/sweetalert2.github.io)
- [Swiper.js Documentation](https://swiperjs.com/swiper-api)
- [Typed.js Documentation](https://github.com/mattboldt/typed.js/)
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Example Postal Pincode API](https://www.postalpincodeapi.com/)

---
