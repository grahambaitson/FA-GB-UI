export default {
	"application": {
		"title": "Graham Baitson - FA",
		"navigation": {
			"about": "About",
			"admin": {
				"booking": {
          "booking": "Bookings",
          "view": "View",
          "create": "Create",
          "update": "Update"
        },
				"guest": {
				  "guest": "Guests",
				  "view": "View",
          "create": "Create",
          "update": "Update"
				},
				"hotel": {
          "hotel": "Hotels",
          "view": "View",
          "create": "Create",
          "update": "Update"
        }
			},
			"user": {
				"login": "Login",
				"logout": "Logout"
			},
			"catch-all": "Page Not Found"
		},
		"logo": {
			"alt": "FA Logo"
		},
		"footer": {
			"copyright": "&copy; 2017 Graham Baitson. FA. All Rights Reserved"
		}
	},
	"partial": {
		"plotly-interactions-partial": {
			"daterange-label": "Date Range: ",
			"selected-label": "Selected: ",
			"daterange-today-label": "Today",
			"daterange-yesterday-label": "Yesterday",
			"daterange-this-week-label": "This Week",
			"daterange-last-7-days-label": "Last 7 Days",
			"daterange-last-week-label": "Last Week",
			"daterange-this-month-label": "This Month",
			"daterange-last-30-days-label": "Last 30 Days",
			"daterange-last-month-label": "Last Month"
		}
	},
	"page": {
		"home": {
			"title": "Home",
		},
		"login": {
			"title": "Login",
			"form-username-label": "Username",
			"form-username-placeholder": "Enter Username",
			"form-password-label": "Password",
			"form-password-placeholder": "Enter Password",
			"form-login-button": "Login"
		},
		"about": {
			"title": "About",
			"description": "The aim is to write an application that takes in a string of JSON containing an array of objects each with a date and rate pair. Each object in this array contains the pricing information for only one day. There are an infinite number of possible rates, and the dates are not continuous. (There may be dates skipped in the array). You should be able to pick a start and end."
		},
		"admin": {
			"title": "Admin",
			"booking": {
        "title": "Booking",
        "description": "The following are the bookings.",
        "table": {
          "id-header": "ID",
          "guest-email-address-header": "Guest Email Address",
          "guest-email-address-filter": "Search Guest Email Address",
          "hotel-name-header": "Email Hotel Name",
          "hotel-name-filter": "Search Hotel Name",
          "booking-rate-header": "Booking Rate",
          "booking-rate-filter": "Search Booking Rate",
          "reservation-start-date-header": "Reservation Start Date",
          "reservation-start-date-filter": "Search Reservation Start Date",
          "reservation-end-date-header": "Reservation End Date",
          "reservation-end-date-filter": "Search Reservation End Date",
          "reservation-colour-header": "Reservation Colour",
          "reservation-colour-filter": "Search Reservation Colour",
          "created-date-header": "Created Date",
          "created-date-filter": "Search Created Date",
          "active-header": "Active",
          "functions" : {
            "edit": "Edit",
            "deactivate": "Deactivate",
            "activate": "Activate",
            "delete": "Delete"
          }
        },
        "create-booking": {
          "title": "Create Booking",
          "description": "Please use the following fields to create a new booking.",
          "json-description": "Please use the following if you want to upload multiple bookings using JSON. NOTE: If you want an example of the JSON structure that is expected, please click the 'Example JSON' button.",
          "update-description": "Please use the following fields to update the booking.",
          "form-json-label": "Multiple Booking JSON",
          "form-json-placeholder": "Multiple Booking JSON",
          "form-guest-email-address-label": "Guest Email Address",
          "form-guest-name-label": "Guest Name",
          "form-guest-name-placeholder": "Guest Name (auto-populated)",
          "form-hotel-name-label": "Hotel Name",
          "form-hotel-address-label": "Hotel Address",
          "form-hotel-address-placeholder": "Hotel Address (auto-populated)",
          "form-hotel-rate-label": "Hotel Rate",
          "form-hotel-rate-placeholder": "Hotel Rate (auto-populated)",
          "button-text-project-example-json": "Project Example JSON",
          "button-text-block-single-booking-example-json": "Single Block Booking Example JSON",
          "button-text-block-mixed-booking-example-json": "Mixed Block Booking Example JSON",
          "button-text-upload-json": "Upload JSON",
          "button-text-create": "Create",
          "button-text-update": "Update",
        },
        "empty-message": "There are currently no bookings.",
        "error-message": "There was an error in your request. Please try again.",
        "confirm-activate-message": "Are you sure you would like to activate this booking?",
        "confirm-deactivate-message": "Are you sure you would like to deactivate this booking?",
        "confirm-delete-message": "Are you sure you would like to delete this booking? This cannot be undone."
      },
			"guest": {
        "title": "Guest",
        "description": "The following are the guests.",
        "table": {
          "id-header": "ID",
          "name-header": "Name",
          "name-filter": "Search Name",
          "email-address-header": "Email Address",
          "email-address-filter": "Search Email Address",
          "cell-number-header": "Cell Number",
          "cell-number-filter": "Search Cell Number",
          "created-date-header": "Created Date",
          "created-date-filter": "Search Created Date",
          "active-header": "Active",
          "functions" : {
            "edit": "Edit",
            "deactivate": "Deactivate",
            "activate": "Activate",
            "delete": "Delete"
          }
        },
        "create-guest": {
          "title": "Create Guest",
          "description": "Please use the following fields to create a new guest.",
          "update-description": "Please use the following fields to update the guest.",
          "form-name-label": "Name",
          "form-name-placeholder": "Name",
          "form-email-address-label": "Email Address",
          "form-email-address-placeholder": "Email Address",
          "form-cell-number-label": "Cell Number",
          "form-cell-number-placeholder": "Cell Number",
          "button-text-create": "Create",
          "button-text-update": "Update",
        },
        "empty-message": "There are currently no guests.",
        "activate-response-message": "You have successfully activated the guest '{{ emailAddress }}'.",
        "deactivate-response-message": "You have successfully deactivated the guest '{{ emailAddress }}'.",
        "error-message": "There was an error in your request. Please try again.",
        "confirm-activate-message": "Are you sure you would like to activate this guest?",
        "confirm-deactivate-message": "Are you sure you would like to deactivate this guest?",
        "confirm-delete-message": "Are you sure you would like to delete this guest? This cannot be undone."
      },
      "hotel": {
        "title": "Hotel",
        "description": "The following are the hotels.",
        "table": {
          "id-header": "ID",
          "name-header": "Name",
          "name-filter": "Search Name",
          "address-header": "Address",
          "address-filter": "Search Address",
          "number-of-rooms-header": "Number of Rooms",
          "number-of-rooms-filter": "Search Number of Rooms",
          "rate-header": "Rate",
          "rate-filter": "Search Rate",
          "created-date-header": "Created Date",
          "created-date-filter": "Search Created Date",
          "active-header": "Active",
          "functions" : {
            "edit": "Edit",
            "deactivate": "Deactivate",
            "activate": "Activate",
            "delete": "Delete"
          }
        },
        "create-hotel": {
          "title": "Create Hotel",
          "description": "Please use the following fields to create a new hotel.",
          "update-description": "Please use the following fields to update the hotel.",
          "form-name-label": "Name",
          "form-name-placeholder": "Name",
          "form-address-label": "Address",
          "form-address-placeholder": "Address",
          "form-number-of-rooms-label": "Number of Rooms",
          "form-number-of-rooms-placeholder": "Number of Rooms",
          "form-rate-label": "Rate",
          "form-rate-placeholder": "Rate",
          "button-text-create": "Create",
          "button-text-update": "Update",
        },
        "empty-message": "There are currently no hotels.",
        "activate-response-message": "You have successfully activated the hotel '{{ name }}'.",
        "deactivate-response-message": "You have successfully deactivated the hotel '{{ name }}'.",
        "error-message": "There was an error in your request. Please try again.",
        "confirm-activate-message": "Are you sure you would like to activate this hotel?",
        "confirm-deactivate-message": "Are you sure you would like to deactivate this hotel?",
        "confirm-delete-message": "Are you sure you would like to delete this hotel? This cannot be undone."
      }
		},
		"page-not-found": {
			"title": "Page Not Found",
			"description": "Sorry the page you are looking for cannot be found."
		},
	}
};
