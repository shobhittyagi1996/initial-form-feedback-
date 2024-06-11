sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.kpo.feedbackformforgoodsupply.controller.View1", {
        onInit: function () {
            const aData = [
                {
                 
                  QuestionText:"- Further to your company being awarded Purchase Order {Call-off Notice/PO(One-time Contract)}, you are kindly asked to submit the following information: ",
                },
                {
                  InputFieldValue:"",
                  QuestionText:"Your internal Order reference number: ",
                },
                {
                 
                  QuestionText:"- Details for the person responsible for administration of this Purchase Order: *",
                },
                {
                  InputFieldValue:"",
                  QuestionText:"Name",
                },
                {
                    InputFieldValue:"",
                    QuestionText:"Position",
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"Responsibility",
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"Telephone",
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"Email",
                  },
                  {
                    AnswerType:"RB1",
                    QuestionText:"Confirm that the contractual delivery date of [Manual input] will be met or improved: *					",
                  },
                  {
                    "InputFieldValue": "ta",
                    "QuestionText": "The delivery terms for this order are {Incoterms 1 (of CON/PO)} + {Incoterms 2 (from form)}. " +
                                    "[in case EXW/FCA without Inspection, reflect add. text: “Once the goods will be ready for shipment, please upload a copy of certificates stipulated by Contract, Packing list and photos of unpacked materials to the Supplier Portal. We will advise further instructions after your notification of goods readiness taking into account specifics of the material and RoK customs legislation requirements.”] " +
                                    "[in case DDP with/without Inspection, reflect add. text: “In addition, please advise the from which country the shipment is planned, expected time for transportation and region/city where customs clearance will take place.”]"
                },
                
                  {
                    AnswerType:"RB1",
                    QuestionText:"- Confirm that the following documents required by contract will be provided: {List of required documents}",
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"Please be notified that this Purchase order requires Level {Inspection Level (from form)} of Inspection to be performed at manufacturers/Supplier’s premises by the third party nominated by KPO."
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"[in case DDP with inspection, reflect add. text: - Once the goods will be ready for delivery to KPO warehouse, please e-mail a copy of certificates stipulated by Contract and Packing list.",
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"- No goods are allowed to be shipped without KPO confirmation.",
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"- Please note that the assigned Expediting specialist is {KPO Expediting User's Name}",
                  },
                  {
                    InputFieldValue:"",
                    QuestionText:"- Please see attached presentation for detailed information about Expediting process after PO signature and until collection of the materials as well as requirements for documents provision.",
                  },
                
              ];
             let omodel = new JSONModel (aData);
              this.getView().setModel(omodel, "myModel");
        },
        
    });
});
