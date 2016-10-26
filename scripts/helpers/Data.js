/**
 * @module  Models
 */
export default {
	getData: () => {
		return {
		  "accounts": [
		    {
		      "accountID": 3630719,
		      "accountName": "Harry Ramp",
		      "accountType": "Physical"
		    },
		    {
		      "accountID": 4348039,
		      "accountName": "Carol Ramp",
		      "accountType": "Legal"
		    }
		  ],
		  "deals": [
		    {
		      "dealID": "00614000019l9KkAAI",
		      "link": "https://test.salesforce.com/00614000019l9KkAAI"
		    },
		    {
		      "dealID": "0061400001E782vAAB",
		      "link": "https://test.salesforce.com/0061400001E782vAAB"
		    }
		  ],
		  "relationships": [
		    [
		      {
		        "type": "Deal",
		        "id": "00614000019l9KkAAI"
		      },
		      {
		        "type": "Account",
		        "id": 3630719
		      }
		    ],
		    [
		      {
		        "type": "Account",
		        "id": 3630719
		      },
		      {
		        "type": "Account",
		        "id": 1427013
		      }
		    ],
		    [
		      {
		        "type": "Deal",
		        "id": "0061400001E782vAAB"
		      },
		      {
		        "type": "Account",
		        "id": 3630719
		      }
		    ],
		    [
		      {
		        "type": "Account",
		        "id": 3630719
		      },
		      {
		        "type": "Account",
		        "id": 1427013
		      }
		    ],
		    [
		      {
		        "type": "Deal",
		        "id": "0061400001E782vAAB"
		      },
		      {
		        "type": "Account",
		        "id": 4348039
		      }
		    ]
		  ]
		}
	}
}