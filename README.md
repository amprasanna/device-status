# Device Status Application

### Introduction

Device Status Sample provides a simple approach to access a Device Status Dashboard, that lists out the connection statistics of various Devices associated with Device-Types, that are registered to the Watson IoT Platform.

The [source code for the Device Status sample](https://github.com/amprasanna/device-status) is written in Node.js using Node.js Client Library and has been made available on the [Github Repository](https://github.com/amprasanna/device-status). Refer to the WIoTP Documentation to further understand the IBM Watson IoT Platform capabilities, to come up with your own Application, Device & Gateway samples in the world of Internet of Things.

### Software Requirements

* Jazzhub Account
* Bluemix Account
     * Node.js Boiler Plate Service
     * Watson Internet of Things Platform Service

### What is demonstrated in Device Status sample?

The Device Status sample is intended to simplify the process of monitoring the Device Status, by providing a Device Status Dashboard, that lists out all the Device-Types and the Device-ID's associated with each of them, as registered on the Watson IoT Platform (WIoTP).

The Dashboard, currently lists the following:

* Device-ID                   : Unique Device-ID associated to a given Device-Type
* Device-Type                 : Unique Device-Type that hosts a Device or a set of Devices
* Connection Status           : Specifies whether the Device is Connected to the WIoT Platform or not
* Close-Code                  : Specifies the Close-Code, if the Device is Disconnected from the WIoT Platform
* Reason                      : Specifies the Reason associated with the Close Code, that caused the disconnection
* Client-Address              : The last known IP Address of the Device, before it got disconnected from the WIoT Platform


### Deploy Node.js Application along with Watson IoT Platform on Bluemix

The following set of steps, shall walk you through the deployment process:

1. The Device Status sample is made availabe on the Github repository. Click on the DEPLOY button, provided below, to initiate the deployment process of deploying the Node.js service, that hosts the Device Status sample.

[![](https://github.com/amprasanna/iot-cognitive-samples/blob/master/deploy.png)](https://hub.jazz.net/deploy/index.html?repository=https://github.com/amprasanna/device-status)

2. If you are using the Jazzhub for the first time, then you will need to create a Alias for the Git repository. Pick an Alias, accept the DevOps T&C and click on Create to create an Alias for yourself. If you already have a Jazzhub account, then, you can ignore this step.

3. You should now get to see a screen that mentions the details of the Application, before deployment process is initiated. Review the Application name, Bluemix Region, Organization and Space. Click on DEPLOY to begin the sample deployment.

4. The Deployment process takes couple of minutes to complete. Behind the scenes, the following set of processes are executed without any user intervention:

- Clones the application code into your Jazzhub account
- Create the application in Bluemix
- Creates the necessary services for this application
- Deploys the application in Bluemix

5. The progress of the Deployment process and the success message when the process is completed

6. With the Deployment process concluding successfully, you can now access the Device Status sample application, by clicking on the “View Your App” button, as shown in the above Image. Alternatively, you can always access the Application from the application service available on Bluemix Dashboard.

