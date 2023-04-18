// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;

  const tileOne = {
    "type": "tile",
    "content": [
	   {
    "type": "image",
    "src": "https://www.report-one.fr/wp-content/uploads/2020/06/oci.png",
    "alt": "OCI logo",
    "onClick": {
      "type": "SERVERLESS_ACTION_HOOK",
      "serverlessFunction": "exampleFunction"
    }
  },
      {
        "type": "divider",
        "distance": "small"
      },
      {
        "type": "heading",
        "text": "Devis en cours de validation"
      },
      {
        "type": "alert",
        "title": "Attention : Demandes de devis en attente de validation",
        "body": {
          "type": "text",
          "text": "Clique sur l'URL pour valider le devis"
        }
      },
      {
        "type": "divider",
        "distance": "small"
      },
      {
        "type": "descriptionList",
        "items": [
          {
            "label": "Titre:",
            "value": "Réassortiment janvier 2023"
          },
          {
            "label": "Date d'enregistrement:",
            "value": "04/01/2023"
          },
          {
            "label": "URL Devis:",
            "value": {
              "type": "text",
              "format": "markdown",
              "text": "[Devis Numéro: 0123456789](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
            }
          }
        ]
      },
      {
        "type": "tag",
        "text": "En attente de validation",
        "variant": "warning",
        "onClick": {
          "type": "SERVERLESS_ACTION_HOOK",
          "serverlessFunction": "exampleFunction"
        }
      },
      {
        "type": "button",
        "text": "Clique ici pour valider le devis",
        "onClick": {
          "type": "SERVERLESS_ACTION_HOOK",
          "serverlessFunction": "exampleFunction"
        }
      },
      {
        "type": "heading",
        "text": "Devis validés"
      },
      {
        "type": "divider",
        "distance": "small"
      },
      {
        "type": "descriptionList",
        "items": [
          {
            "label": "Titre:",
            "value": "Réassortiment décembre 2022"
          },
          {
            "label": "Date d'enregistrement:",
            "value": "01/12/2022"
          },
          {
            "label": "URL Devis:",
            "value": {
              "type": "text",
              "format": "markdown",
              "text": "[Devis Numéro: 0123456788](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
            }
          },
          {
            "label": "URL Facture:",
            "value": {
              "type": "text",
              "format": "markdown",
              "text": "[Facture Numéro: 0123456788](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
            }
          }
        ]
      },
      {
        "type": "tag",
        "text": "Validé",
        "variant": "success",
        "onClick": {
          "type": "SERVERLESS_ACTION_HOOK",
          "serverlessFunction": "exampleFunction"
        }
      }
    ]
  };
	
			
  try {
    const { data } = await axios.get("https://zenquotes.io/api/random");

    const quoteSections = [
      {
        type: "tile",
        body: [
          {
            type: "text",
            format: "markdown",
            text: `**Hello ${firstname}, here's your quote for the day**!`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_${data[0].q}_`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_**Author**: ${data[0].a}_`,
          },
        ],
      },
      {
        type: "button",
        text: "Get new quote",
        onClick: {
          type: "SERVERLESS_ACTION_HOOK",
          serverlessFunction: "crm-card",
        },
      },
    ];

    sendResponse({
      sections: [tileOne],
    });
	  
	  
	  
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: "ERROR",
        body: `Error: ${error.message}`,
      },
      sections: [tileOne],
    });
  }
};
