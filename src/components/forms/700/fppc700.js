// All frontend data collection and manipulation will be in
// this object.

const e700_schema = {
  // string const means the frontend doesn't change it
  "form": "string const",
  "meta": {
    "form_name": "string const",
    "schema_version": "string const"
  },
  "filing_id": "string const",
  "year": "string const",
  "amendment": "bool const", // if this is an amendment is set on create
  "amendment_reason": "string", // should be set to null if not an amendment
  "amends_id": "string const", // should be set to null if not an amendment
  "filer": { // not touched by frontend, used to populate verification
    "filer_id": "string const",
    "first_name": "string const",
    "middle_name": "string const",
    "last_name": "string const",
    "address1": "string const",
    "address2": "string const",
    "city": "string const",
    "state": "string const",
    "zipcode": "string const",
    "phone": "string const"
  },

  // Cover Page
  "cover": {
    "offices": [
      {
        "agency_name": "string const",
        "divions_board_district": "string const",
        "position": "string const",
        "is_primary": "bool const",
        //"assuming_date": "string const",
        //"leaving_date": "string const",
        //"election_date": "string const",
      }
    ],
    "jurisdiction": {
      "is_state": "bool const",
      "is_multi_county": "bool const",
      "is_city": "bool const",
      "is_judge_or_court": "bool const",
      "is_county": "bool const",
      "is_other": "bool const",
      "description_city": "string const",
      "description_county": "string const",
      "description_multi_county": "string const",
      "description_other": "string const",
    },
    "statement_type": {
      "is_annual": "bool const",
      "is_assuming": "bool const",
      "is_leaving": "bool const",
      "is_candidate": "bool const",
      "annual_start_date": "string const",
      "date_assumed": "string const",
      "leaving_office_date_left": "string const",
      "leaving_office_date_start": "string const",
      "candidate_election_date": "string const",
      "candidate_office_sought": "string const",
    },
    "schedule_summary": {
      "schedule_a1": "bool",
      "schedule_a2": "bool",
      "schedule_b": "bool",
      "schedule_c": "bool",
      "schedule_d": "bool",
      "schedule_e": "bool",
    },
    // frontend fills this in at the end
    "verification": {
      // TOOD: add mailing address, daytime telephone number, email addres?
      // TODO: rationale: record of info presented to user when e-signed
      "filer_id": "string",
      "filer_title": "string",
      "location": "string",
      "date": "string",
      "signature": "string",
      "comment": "string"
    },
  },

  // SCHEDULE A-1
  "schedule_a1": [
    {
      "ordinal": "integer",
      "name_of_business_entity": "string",
      "business_description": "string",
      "fair_market_value": "integer",
      "nature_of_investment": "integer",
      "investment_other_description": "string",
      "date_acquired": "string",
      "date_disposed": "string",
    }
  ],
  // SCHEDULE A-2
  "schedule_a2": [
    {
      // Part 1
      "entity_name": "string",
      "entity_type": "integer",  // 0: Trust, 1: Business Entity
      "business_description": "string",
      "fair_market_value": "integer",
      "nature_of_investment": "integer",
      "investment_other_description": "string",
      "date_acquired": "string",
      "date_disposed": "string",
      "business_position": "string",
      // Part 2
      "gross_income_received": "integer",
      // Part 3
      "income_sources": [
        {
          "first": "string",
          "middle": "string",
          "last": "string",
        },
      ],
      // Part 4
      "investment": [
        {
          "name_of_business_entity": "string",
          "business_description": "string",
          "fair_market_value": "integer",
          "nature_of_interest": "integer",
          "nature_of_interest_other_description": "string",
          "date_acquired": "string",
          "date_disposed": "string",
        }
      ],
      "real_property": [
        {
          "location_type": "integer", // 0: street address, 1: parcel, 2: other
          "parcel_number": "string",
          "other_location": "string",
          "street_address": "string",
          "city": "string",
          "state": "string",
          "zipcode": "string",
          "fair_market_value": "integer",
          "date_acquired": "string",
          "date_disposed": "string",
          "nature_of_interest": "integer",
          "nature_of_interest_other_description": "string",
          "lease_years_remaining": "integer",
          "gross_income_received": "integer",
          "income_sources": [
            {
              "first": "string",
              "middle": "string",
              "last": "string",
            },
          ],

        }
      ],
    }
  ],
  // SCHEDULE B
  "schedule_b": [
    {
      "parcel_or_address": "string",
      "city": "string",
      "state": "string",
      "zipcode": "string",
      "fair_market_value": "integer",
      "nature_of_interest": "integer",
      "nature_of_interest_other_description": "string",
      "lease_years_remaining": "integer",
      "loan":
      {
        "lender_name": "string",
        "street_addres": "string",
        "city": "string",
        "state": "string",
        "zipcode": "string",
        "interest_rate": "string",

      },
    }
  ],

  // SCHEDULE C
  "schedule_c": [

  ],

  // SCHEDULE D
  "schedule_d": [

  ],

  // SCHEDULE E
  "schedule_e": [

  ],

  // storage for the comments for each schedule.
  // These should be null if not used.
  "comments": {
    "schedule_a1": "string",
    "schedule_a2": "string",
    "schedule_b": "string",
    "schedule_c": "string",
    "schedule_d": "string",
    "schedule_e": "string",
  },
}
