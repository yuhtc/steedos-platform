
<p align="center">
  <a href="https://www.steedos.org">
    <img alt="Steedos" src="https://steedos.github.io/assets/logo.png" width="80" />
  </a>
</p>
<h1 align="center">
  Steedos Platform
</h1>

<p align="center">
<a href="https://github.com/steedos/steedos-platform/blob/1.22/README_cn.md">中文</a>
<a href="http://www.steedos.org/docs/overview"> · Docs</a>
<a href="https://github.com/steedos/steedos-platform/issues/"> · Report a bug</a>
<a href="https://github.com/steedos/steedos-platform/discussions"> · Discussions</a>
</p>

<p align="center">
Steedos Platform is a low code development platform with visual modeling and descriptive programming. You can easily create intelligent and mobile enterprise applications by clicking the mouse.
</p>

<h3 align="center">
 🤖 🎨 🚀
</h3>

## Click, Not Code

Traditional programming, denotes the means of programming by using certain coding languages, to tell a computer exactly how to perform an action. 

On the other hand, declarative programming accomplishes the same results by basically telling the computer the end result and letting the computer figure out how to get there.

Steedos is such an declarative programming platform.  Steedos empowers business owners with all of the tools of a developer, without requiring an advanced skill set.

With drag-and-drop simplicity, just about anyone can create apps that automate business processes. The apps you create for your business can be deployed on mobile, tablet and web, be simple or complex, and connect to nearly any data source.

## Based on Metadata

Metadata is core to the steedos infrastructure. Metadata relates to the objects, fields, configurations, code, logic, and page layouts that go into building the information architecture and look and feel of your steedos apps.

Metadata can be imported into Steedos, modified in the product interface, or manipulated via the Steedos Metadata API.

There are several types of Metadata, with each one representing a unique way a business function can be customized. Here are a few broad categories for Metadata types:

- **Data**: the core components of the data structure on which most customization is built. E.g. Custom Objects, Fields, and Custom Apps.
- **Programmability**: custom code developed on top of the platform. E.g. Buttons, Form Events, Triggers.
- **Presentation**: customization on how users interact with the platform. E.g. Components, List View and Page Layouts.

## Features

- **Custom Objects**: Create custom objects to store information that’s unique to your organization. Choose whether your custom objects are searchable, support sharing, or include access to the Bulk API and Streaming API.

- **Formula**: A formula is an algorithm that derives its value from other fields, expressions, or values. Formulas can help you automatically calculate the value of a field based on other fields.

- **Validation Rules**: Improve the quality of your data using validation rules. Validation rules verify that the data a user enters in a record meets the standards you specify before the user can save the record. 

- **Workflow Rules**: Workflow lets you automate standard internal procedures and processes to save time across your org. A workflow rule is the main container for a set of workflow instructions. These instructions can always be summed up in an if/then statement.

- **Automated Actions**: An automated action is a reusable component that performs some sort of action behind the scenes—like updating a field or sending an email. Once you create an automated action, add it to a process, milestone, or other automated process.

- **Approval Process**:  Different from process automation in the form of workflow rules. Approvals take automation one step further, letting you specify a sequence of steps that are required to approve a record.

- **Report & Dashboard**: Steedos offers a powerful suite of reporting tools that work together to help you understand and act on your data.

- **Open Source, Customizable**: Steedos Platform  is open source. This will make you confident that Steedos Platform will exist forever. You can also fork the source code down and make changes as needed.

## Steedos Package

A package is a container for something as small as an individual component or as large as a set of related apps. After creating a package, you can distribute it to other Steedos users and organizations, including those outside your company.

Every steedos package is an native nodejs project, developers can add business logic to most system events, including button clicks, related record updates, and customized pages. Code can be initiated by Web service requests and from triggers on objects.

## Steedos DX

Steedos DX introduces a new way to organize your metadata and distribute your apps. You can benefit from modern collaboration technologies such as Git to version control everything across your team - your code, your org configuration, and your metadata. 

To make this possible, we're enabling you to export your metadata, define data import files, and easily specify the edition, features, and configuration options of your development, staging, and production environments.

![Steedos Overview](http://www.steedos.org/assets/platform/platform-overview.png)

Steedos DX is licenced per developer. We provide Steedos DX free license for open source projects and educational institutions.

## Requirements

- [Meteor](https://www.meteor.com/) Meteor is an open source platform for web, mobile, and desktop used by over half a million developers around the globe to make shipping javascript applications simple, efficient, and scalable.

> Only when you run the source code in the '/creator' folder of our platform, you need to install Meteor. If you use Steedos as a development tool, you do not need to install Meteor, see [Development Guide](/Development_Guide) for more.

- [MongoDB](https://www.mongodb.com/try/download/) version >= 4.2. MongoDB is a general purpose, document-based, distributed database built for modern application developers.
- [Node.js](https://nodejs.org/en/download/) version >= 10.15.1 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/) version >= 1.5 (which can be checked by running `yarn version`). Yarn is a performant package manager for JavaScript and replaces the `npm` client. It is not strictly necessary but highly encouraged.

## Installation and Deployment

This project is the kernel source code of Steedos Platform. We will compile and release it as [NPM package](https://www.npmjs.com/package/steedos-server) regularly.

You can create a new steedos project or install the following open source steedos projects.

- [Project Management App](https://github.com/steedos/project-management-app)
- [Customer Relationship Management](https://github.com/steedos/steedos-app-crm)

## Learn more

For more information, please refer to the official website of [www.steedos.org](https://www.steedos.org/)

## Contribute to Steedos Platform

From reporting bugs to proposing improvement suggestions, every contribution is worthy of appreciation and welcome. If you are going to modify the code to fix a bug or implement a new function, please create an issue first, so that we can ensure that your work is not wasted.

See [Development Guide](/CONTRIBUTING.md) for how to run and build our platform source code.

## Licence

Steedos Platform is licensed under the MIT. Everyone can build and distribute steedos apps for free. 

## Keep in Contact

If you have any questions or want to talk to other users of Steedos Platform , please jump to GitHub for discussion [Click to Discuss](https://github.com/steedos/steedos-platform/discussions) or [Join me on Slack-it's a faster,simpler way to work](https://join.slack.com/t/steedos/shared_invite/zt-jq7eupr9-cgKrUOyWb1zymniRzhH4jg).
