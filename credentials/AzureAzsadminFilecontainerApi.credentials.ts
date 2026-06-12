import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminFilecontainerApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminFilecontainerApi';

        displayName = 'Azure Azsadmin Filecontainer API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminFilecontainer/azure-azsadmin-filecontainer.png', dark: 'file:../nodes/AzureAzsadminFilecontainer/azure-azsadmin-filecontainer.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Filecontainer API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
