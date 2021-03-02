[ [home](../../../../../README.md) | [400](../400/README.md) | [600](../600/README.md) | [700](../700/README.md) | [800](../800/README.md) ]

# Series 600 - Lobbyist

### 1. Summary of Netfile data

**Form counts:**

* Ec601 : 1790
* Ec602 : 1237
* Ec603 : 2697
* Ec604 : 2193
* Ec605 : 53

### 2. XML Schema Keys (from Netfile *.efil data format) 

*UNDER CONSTRUCTION*

See JSON schema in [./schemas.json](./schemas.json).


#### Form EC-601
```
disclosure
	@agency
	@type
	@version
	allow_municipal_decision_deletion
	
	cover
		calendar_year
		filer
			@id		
		filer_address
			line_1
			line_2
			city
			state
			zip
		filer_contact_email
		filer_phone
			phone_number
		signature
			date
			location
			signer_first_name
			signer_last_name
			signer_title
		
	directory
		entity: [] of
			@id
			@is_individual			
			name_last_or_org
			effective_date
			deletion_date
		municipal_decision: [] of
			@id
			description
			outcome_sought		
		
	filing_fees
		added_clients
		added_lobbyists
		filing_fee_due
	
	filing_information
		amendment_description
		amendment_sequence_number
		amendment_superceded_filing_id
		filer_id
		filing_date
	
	schedule_a
		@count
		entity: [] of
			@id
	
	schedule_b
		@count
		lobbying_client: [] of
			@id (same as .client.@id)
			client
				@id
			client_address
				line_1
				line_2
				city
				state
				zip
			client_phone
				phone_number
			client_business_description
			municipal_decisions
				@count
				municipal_decision: {} or [] of
					@id
			coalition_members: {} or [] of
				@count
				coalition_member
					id
					member
						@id
					phone
						phone_number
					address
						line_1
						state
						zip

			effective_date
			deletion_date			
			
	schedule_c_1		
		@count		
		fundraising_activity: [] of
			city_official
				@id
			lobbyist
				@id
						
	schedule_c_2
		@count
		campaign_service: [] of
			client_official
				@id
			lobbyist
				@id
	
	schedule_c_3
		@count
		contract_service: [] of
			client_official
				@id
			lobbyist
				@id
	
	schedule_d_1
		@count
		entity: [] of
			@id

	schedule_d_2
		@count
		entity: [] of
			@id
```

#### Form EC-602
```
disclosure
	@agency
	@type
	@version
	allow_municipal_decision_deletion
	cover:
		nature_and_purpose_of_organization
		calendar_year
		filer:
			@id
		filer_address:
			line_1
			line_2
			city
			state
			zip
		filer_contact_email:
		filer_phone:
			phone_number
		signature:
			date
			location
			signer_first_name
			signer_last_name
			signer_title
			
	directory:
		entity: #{} or [] of
			@id
			@is_individual
			name_first
			name_last_or_org
			name_prefix
			effective_date
			deletion_date
		municipal_decision: # {} or [] of
			@id
			description
			outcome_sought			
		
	filing_fees:
		filing_fee_due
		
	filing_information:
		amendment_sequence_number
		filer_id
		filing_date
	
	schedule_a_2:
		@count
		entity: #{} or [] of 
			@id		
	
	schedule_b_1: #a string integer
	
	
	schedule_b_2: 
		@count
		municipal_decision: # {} or [] of
			@id
	
	
	schedule_c_1:
		@count
		fundraising_activity: # {} or [] of
			lobbyist:
				@id
			city_official:
				@id
		
	schedule_c_2:
		@count
	
	schedule_c_3:
		@count
	
	schedule_d:
		@count
	
```

### Form EC-603


### Form EC-604


### Form EC-605

