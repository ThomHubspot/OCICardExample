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
  },{
    "type": "divider",
    "distance": "small"
  },
  {
    "type": "heading",
    "text": "Créer un nouveau devis"
  },
  {
    "type": "form",
    "content": [
      {
        "type": "input",
        "name": "Titre de Devis",
        "inputType": "text",
        "label": "Titre de Devis",
        "initialValue": "Saisissez le nom du devis."
      },
      {
        "type": "form",
        "content": [
          {
            "type": "select",
            "name": "select_input",
            "label": "Choisissez un produit",
            "placeholder": "Veuillez choisir",
            "options": [
              {
                "value": 42,
                "label": "Produit 1"
              },
              {
                "value": true,
                "label": "Produit 2"
              },
              {
                "value": "a string",
                "label": "Produit 3"
              }
            ]
          }
        ]
      },
      {
        "type": "form",
        "content": [
          {
            "type": "toggleGroup",
            "toggleType": "radioButtonList",
            "name": "radio_input",
            "label": "Sélectionnez les modalités de paiement",
            "options": [
              {
                "value": "42",
                "label": "30 Jours"
              },
              {
                "value": "cake",
                "label": "60 Jours"
              },
              {
                "value": "a string",
                "label": "90 Jours"
              }
            ]
          }
        ]
      },
      {
        "type": "input",
        "name": "Signataire du contrat OCI",
        "inputType": "text",
        "label": "Signataire du contrat OCI",
        "initialValue": ""
      },
      {
        "type": "input",
        "name": "Signataire du contrat Client",
        "inputType": "text",
        "label": "Signataire du contrat Client",
        "initialValue": ""
      },
      {
        "type": "button",
        "text": "Générer le devis",
        "onClick": {
          "type": "SUBMIT",
          "serverlessFunction": "exampleFunction"
        }
      }
    ]
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
            "value": "Devis janvier 2023"
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
              "text": "[Devis Numéro: 0123456789](https://19651884.cdnp1.hubspotusercontent-na1.net/hubfs/19651884/quotes-folder-pdfs-portal-19651884/49825709/Location%20Utilitaires.pdf?Expires=1681890081&Signature=iYZH9zgsEaoFd5M9QFevqbHifuxGGiasYg-hGsACD8fAQs6uZkCLnzLQBLTIC8MIsIfhyxrRLzDpxruQKuDu1EcyFjIw5RvRAhv8hl8B2ZJ4WF8qadXrwxucpdsrLJHMC-2bqL6NzblJexW7By8sYZpmsahtX07YqBWpdeINsaFygGCtmcnOPq7opJXN3A80~xNOq5oGA4~mizreKRolzFWXFtRx~yIknJUsTrdlI22IFx2V5bJkPVf4hDJR8LVDV0T1lKG6X9KYoNtMsxSW0zz3eh4ltgCwiL9~0UN2k9CTODnAzipBeFUmSgDWxD1d527~2o0ftyjJTv0zt~J3bg__&Key-Pair-Id=APKAJDNICOKANPHVCSBQ)"
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
    "type": "divider",
    "distance": "small"
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
              "text": "[Devis Numéro: 0123456788](https://19651884.cdnp1.hubspotusercontent-na1.net/hubfs/19651884/quotes-folder-pdfs-portal-19651884/49825709/Location%20Utilitaires.pdf?Expires=1681890081&Signature=iYZH9zgsEaoFd5M9QFevqbHifuxGGiasYg-hGsACD8fAQs6uZkCLnzLQBLTIC8MIsIfhyxrRLzDpxruQKuDu1EcyFjIw5RvRAhv8hl8B2ZJ4WF8qadXrwxucpdsrLJHMC-2bqL6NzblJexW7By8sYZpmsahtX07YqBWpdeINsaFygGCtmcnOPq7opJXN3A80~xNOq5oGA4~mizreKRolzFWXFtRx~yIknJUsTrdlI22IFx2V5bJkPVf4hDJR8LVDV0T1lKG6X9KYoNtMsxSW0zz3eh4ltgCwiL9~0UN2k9CTODnAzipBeFUmSgDWxD1d527~2o0ftyjJTv0zt~J3bg__&Key-Pair-Id=APKAJDNICOKANPHVCSBQ)"
            }
          },
          {
            "label": "URL Facture:",
            "value": {
              "type": "text",
              "format": "markdown",
              "text": "[Facture Numéro: 0123456788](https://19651884.cdnp1.hubspotusercontent-na1.net/hubfs/19651884/quotes-folder-pdfs-portal-19651884/49825709/Location%20Utilitaires.pdf?Expires=1681890081&Signature=iYZH9zgsEaoFd5M9QFevqbHifuxGGiasYg-hGsACD8fAQs6uZkCLnzLQBLTIC8MIsIfhyxrRLzDpxruQKuDu1EcyFjIw5RvRAhv8hl8B2ZJ4WF8qadXrwxucpdsrLJHMC-2bqL6NzblJexW7By8sYZpmsahtX07YqBWpdeINsaFygGCtmcnOPq7opJXN3A80~xNOq5oGA4~mizreKRolzFWXFtRx~yIknJUsTrdlI22IFx2V5bJkPVf4hDJR8LVDV0T1lKG6X9KYoNtMsxSW0zz3eh4ltgCwiL9~0UN2k9CTODnAzipBeFUmSgDWxD1d527~2o0ftyjJTv0zt~J3bg__&Key-Pair-Id=APKAJDNICOKANPHVCSBQ)"
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
