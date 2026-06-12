import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminFilecontainer implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Filecontainer',
                name: 'N8nDevAzureAzsadminFilecontainer',
                icon: { light: 'file:./azure-azsadmin-filecontainer.png', dark: 'file:./azure-azsadmin-filecontainer.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Deployment Admin Client.',
                defaults: { name: 'Azure Azsadmin Filecontainer' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminFilecontainerApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
