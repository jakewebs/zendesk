import requests
import sys
import json
'''
	This file serves two functions.

	1. Connect to the Zendesk API and request all tickets for my account, 
	   which is at the domain zccjakewebs.zendesk.com.
	2. Print out the tickets if successfully found, or an error message if not.
'''

# Parameters
url = 'https://zccjakewebs.zendesk.com/api/v2/tickets.json'
#Correct set of parameters for reference purposes
# EMAIL = 'jakewebster2023@berkeley.edu' + '/token'
# PASSWORD = '7bpia9Ypln87GZOAXgnGRIKLQrD7p8rpy6aQONTL' (Token generated using Zendesk API)
user = sys.argv[1] + '/token'
password = sys.argv[2]
print("Inputted username: ", user)
print("Inputted access token: ", password)

response = requests.get(url, auth = (user, password))

# Check for bad HTTP code
sc = response.status_code
if sc != 200:
	print("Login failed! Exiting the program.")
	#exit()
else:
	# Print out the tickets
	data = response.json()
	tickets = data['tickets']
	
	print("Login successful! ")
	print("---- TICKETS ----")
	#print(tickets)
	for t in tickets:
		print("->~~~Ticket number: ", t['id'], ", Priority: ", t['priority'], ", Requester: ", t['requester_id'], ", Status: ", t['status'], "~~~")
		print("Description: ", t['description'], '\n')
