// All frontend data collection and manipulation will be in
// this object.

const ec601_schema = {
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
  "lobbying_entity_contact_info_change": "bool const",
  "lobbying_entity_contact_info": {
    "effective_date": "string",
    "name": "string",
    "address1": "string",
    "address2": "string",
    "city": "string",
    "zipcode": "string",
    "state": "string",
    "phone": "string"
  },
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
  // frontend fills this in at the end
  "verification": {
    "filer_id": "string",
    "filer_title": "string",
    "location": "string",
    "date": "string",
    "signature": "string",
    "comment": "string"
  },
  // ordinal: the order in which the user entered lobbyists
  // When one is removed, frontend must renumber all in the list.
  // lobbyist_entity_id is reference to a detailed object stored
  // in directory.entity (below); fields not set in schedule
  // A are just blank. Schedule A are only individuals.
  // When a user enters and saves a lobbyist in schedule A,
  // both directory and the array in schedule A are populated.
  "schedule_a": [
    {
      "lobbyist_entity_id": "uuid",
      "ordinal": "integer"
    }
  ],
  // client_entity_id maps to entity in directory
  // muni_decision_id maps to muni_decision in directory
  // ordinal as before
  "schedule_b": [
    {
      "client_entity_id": "uuid",
      "client_description": "string",
      "ordinal": "integer",
      "muni_decisions": [
        {
          "muni_decision_id": "uuid",
          "ordinal": "integer"
        }
      ],
      "coalition_or_membership": true,
      "coalition_members": [
        {
          "entity_id": "uuid",
          "ordinal": "integer"
        }
      ]
    }
  ],
  // In schedule C, the user enters first, middle, last name of
  // individuals. Upon entering a few characters, the user is presented
  // with options to choose from so that they can use people (entities)
  // already present in the directory. Upon "save" there needs to be de-duplication
  // so that the same first/middle/last combination is saved only once in the
  // directory.
  "schedule_c_1": [
    {
      "lobbyist_entity_id": "uuid",
      "city_official_entity_id": "uuid",
      "ordinal": "integer"
    }
  ],
  "schedule_c_2": [
    {
      "lobbyist_entity_id": "uuid",
      "city_official_entity_id": "uuid",
      "ordinal": "integer"
    }
  ],
  "schedule_c_3": [
    {
      "lobbyist_entity_id": "uuid",
      "city_entity_id": "uuid",
      "ordinal": "integer"
    }
  ],
  // schedule D is relevant only if this is an amendment. It is auto-populated
  // when the user clicks on delete in schedule A, D1 is populated, when
  // the user clicks on delete in schedule B, D1 is populated. On the review
  // page there's an undo delete. The frontend logic must handle the add/remove
  // here and also take care of the correct ordering (ordinal value, integer).
  "schedule_d_1": [
    {
      "entity_id": "uuid",
      "ordinal": "integer"
    }
  ],
  "schedule_d_2": [
    {
      "entity_id": "uuid",
      "ordinal": "integer"
    }
  ],
  "directory": {
    "entity" : [{
      "id": "uuid",
      "individual": "bool", // set to true if it's a person
      "org_name" : "string", // name of an organization if not a person
      "first_name": "string",
      "middle_name": "string",
      "last_name": "string",
      "effective_date": "string", // if the schedule has an effective date field
      "address": {
        // these can also be null, not needed for every entity
        // see form/designs
        "address1": "string",
        "city": "string",
        "zipcode": "string",
        "state": "string",
        "phone": "string"
      }
    }],
    "muni_decision": [
      {
        "id": "uuid",
        "description_short": "string",
        "description_detail": "string",
        "outcome_sought": "string"
      }
    ]
  },
  // storage for the comments for each schedule.
  // These should be null if not used.
  "comments": {
    "schedule_a": "string",
    "schedule_b": "string",
    "schedule_c": "string",
    "schedule_d": "string",
  }
}
