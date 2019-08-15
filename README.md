# Find My Doppelganger 
Reverse image search React App for fidning look-alikes on the web.

## Technologies
- Written in **Javascript** using **React**. 
- **Webpack** handles all dependency and builds the final optimized build.
- The images are temporarily stored in **Firebase Storage**.
- I use the **Cloud Vision API** from Google to calculate the visually similair images.
- Deployed via **Firebase Hosting** on the domain https://doppelganger-13149.web.app/

## App flow

1. App uses device file system to upload image user has picked to Firebase Storage which returns a URL
2. User clicks "Find my Doppelganger"-button, and the app sends a POST HTTP-request to Google Cloud Vision API with the image URL and parameters as the body.
3. App renders the image URLs that was returned from the request.




### Node Packages 
The following node-packages were used
```javascript
    "async": "^3.1.0",
    "firebase": "^6.3.5",
    "node-sass": "^4.12.0",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.1.0",
    "uuid": "^3.3.2"
```

## Demo & Screens 

<img src="/src/assets/images/doppelganger-desktop-demo.gif" alt="Logo"
	title="Logo" width="600" />
<img src="/src/assets/images/doppelganger-mobile-demo.gif" alt="Logo"
	title="Logo" width="200" />

Works on both Desktop and mobile

Try the app here: https://doppelganger-13149.web.app/
