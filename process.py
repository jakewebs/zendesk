import requests

'''
	This file serves two functions.

	1. Connect to the Zendesk API and request all tickets for my account, 
	   which is at the domain zccjakewebs.zendesk.com.
	2. Parse the returned string to extract needed information for the rest
	   of the project.
'''

# Parameters
url = 'https://zccjakewebs.zendesk.com/api/v2/groups.json'
user = 'jakewebster2023@berkeley.edu' + '/token'
password = '7bpia9Ypln87GZOAXgnGRIKLQrD7p8rpy6aQONTL' # Token generated using Zendesk API

response = requests.get(url, auth = (user, password))

# Check for bad HTTP code
sc = response.status_code
if sc != 200:
	print('Status:', sc, 'Request failed. Exiting.')
	exit()

# Basic print statement for now
data = response.json()
print(data)