# ⚡ Cloud & Infrastructure — Points 601–700

!!! note "Format: Point & Concept → Interview Answer → Example / Tool"
    Each row gives you a clean definition you can say in an interview, plus a real-world example or tool.

---

## ☁️ Cloud Models & Responsibility (601–640)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 601. Cloud Computing | Delivering computing services (servers, storage, databases, networks) over the internet "on-demand" with pay-as-you-go pricing. | AWS, Azure, Google Cloud (GCP) |
| 602. Shared Responsibility Model | A framework dictating that the provider secures the cloud infrastructure, while the customer secures the data and apps *in* the cloud. | AWS secures physical data centres; you secure your S3 bucket |
| 603. IaaS (Infrastructure) | The cloud provider gives you the raw virtual hardware (VMs, networking); you manage the OS, runtime, and apps. | AWS EC2 or Azure Virtual Machines |
| 604. PaaS (Platform) | The provider manages the underlying infrastructure and OS; you just deploy your application code. | AWS Elastic Beanstalk or Azure App Service |
| 605. SaaS (Software) | The provider manages everything from the infrastructure to the app; you just configure settings and manage users. | Microsoft 365, Salesforce, or GitHub |
| 606. Public Cloud | Infrastructure shared by multiple customers (tenants) over the public internet. | A standard AWS or Azure environment |
| 607. Private Cloud | Cloud infrastructure dedicated entirely to a single organisation, hosted on-premise or by a third party. | VMware vSphere or an Azure Stack on-premise |
| 608. Hybrid Cloud | A mix of on-premise infrastructure and public cloud services, connected by a secure or dedicated link. | On-premise Active Directory synced with Entra ID |
| 609. Multi-Cloud | Using services from more than one public cloud provider to avoid lock-in or leverage specific features. | Using AWS for compute and GCP for BigQuery analytics |
| 610. Cloud Deployment Model | The model defining where the infrastructure resides and who has access to it (Public, Private, Hybrid, Community). | Moving from a Private Cloud to a Hybrid Deployment |
| 611. Provider Responsibility | The physical security of data centres, hardware host patching, and hypervisor isolation. | AWS replacing a failed hard drive |
| 612. Customer Responsibility | The security of guest OS patching, firewall rules, IAM configurations, and data encryption. | Updating Windows on an EC2 instance and configuring Security Groups |
| 613. Cloud Elasticity | The ability of a cloud environment to automatically provision and de-provision resources to match fluctuating demand. | Auto Scaling Group adding 5 VMs during a Black Friday sale |
| 614. Resource Pooling | The provider's ability to serve multiple customers from the same physical hardware using multi-tenancy. | Ten different customer VMs running securely on one physical AWS host |
| 615. Broad Network Access | Cloud services are accessible from anywhere via standard internet protocols and devices. | Logging into the Azure Portal from a laptop over HTTPS |
| 616. Serverless Computing | A cloud execution model where the provider dynamically manages the allocation and provisioning of servers; the customer only pays for the execution time of their code. | AWS Lambda or Azure Functions executing a piece of code upon an API request |
| 617. Containers | Lightweight, standalone, executable packages of software that include everything needed to run an application. | A Docker container running an Nginx web server |
| 618. Kubernetes (K8s) | An open-source system for automating the deployment, scaling, and management of containerised applications. | A K8s cluster managing the lifecycle of 50 Docker containers |
| 619. Container Registry | A repository for storing and distributing container images securely. | AWS ECR, Docker Hub, or Azure Container Registry |
| 620. Ephemeral Compute | Virtual machines or containers that are spun up dynamically to perform a task and destroyed when the task completes. | Spot instances processing a batch job and shutting down |
| 621. Cloud Native | Building applications specifically designed to leverage cloud computing architectures like microservices and serverless. | A web app built with Lambda functions and DynamoDB |
| 622. Microservices | An architectural style that structures an application as a collection of loosely coupled, independently deployable services. | A shopping app where the cart, payment, and inventory are separate services |
| 623. Infrastructure as Code (IaC) | Managing and provisioning data centres through machine-readable definition files, rather than physical hardware configuration. | Terraform creating 10 VMs and a load balancer with a single script |
| 624. Immutable Infrastructure | An approach to managing services where components 
are replaced rather than changed once they have been deployed. | Triggering a Terraform script to deploy a new server and destroying the old server instead of updating the existing one |
| 625. Cloud Lock-in | The difficulty of moving an application or data from one cloud provider to another due to dependence on proprietary services. | Being unable to easily migrate off AWS Lambda due to heavy use of AWS Step Functions |
| 626. High Availability (HA) in Cloud | Designing infrastructure across multiple physically separate locations to ensure continuous operation. | Deploying web servers across three AWS Availability Zones (AZs) |
| 627. Availability Zone (AZ) | One or more discrete data centres with redundant power, networking, and connectivity within a cloud region. | AWS `us-east-1a` |
| 628. Cloud Region | A geographic area containing two or more Availability Zones. | Azure `UK South` (London) |
| 629. Edge Computing | Processing data near the edge of your network, where the data is being generated, instead of in an artificial intelligence cloud. | An IoT device doing local video analysis before sending summaries to AWS |
| 630. CDN (Content Delivery Network) | A geographically distributed network of proxy servers and their data centres. | Cloudflare caching images in Sydney to serve Australian users faster |
| 631. Cloud Firewalls | Virtualised network security devices that control traffic to and from cloud resources. | AWS Security Groups acting as stateful firewalls per EC2 instance |
| 632. CASB (Cloud Access Security Broker) | Software that sits between users and cloud applications to monitor activity, enforce policy, and prevent data leakage. | Microsoft Defender for Cloud Apps blocking uploads of PII to Box |
| 633. CSPM (Cloud Security Posture Management) | Tools that continuously monitor cloud configurations to identify misconfigurations, compliance violations, and risks. | Prisma Cloud detecting an S3 bucket that was accidentally made public |
| 634. CWPP (Cloud Workload Protection Platform) | Security tools focused on protecting the compute workloads (VMs, containers, serverless) from compromise. | SentinelOne deployed on an EC2 instance to stop malware execution |
| 635. CNAPP (Cloud Native Application Protection Platform) | An architectural approach that combines CSPM, CWPP, and CIEM into a single platform for holistic cloud security. | Wiz or Orca Security analyzing both configuration and workload vulnerabilities |
| 636. CIEM (Cloud Infrastructure Entitlement Management) | Tools that manage and monitor identities and privileges across multi-cloud environments to enforce least privilege. | Finding inactive IAM roles in AWS and removing their permissions |
| 637. Cloud IAM | Identity and Access Management specifically controlling access to cloud provider APIs and resources. | AWS IAM assigning a role to an EC2 instance to let it read from S3 |
| 638. Cloud API Security | Protecting the application programming interfaces that developers and services use to interact with cloud infrastructure. | Requiring TLS and API keys for all requests to AWS API Gateway |
| 639. VPC (Virtual Private Cloud) | A logically isolated section of the public cloud where you can launch resources in a virtual network you define. | Creating a production VPC in Azure with its own subnets and routing |
| 640. Cloud Compliance Frameworks | Pre-defined sets of rules and controls (like SOC 2, HIPAA, FedRAMP) applied to cloud environments to meet regulatory standards. | Using AWS Artifact to download SOC 2 compliance reports |

## ☁️ Advanced Cloud Security & DevSecOps (641–700)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 641. Instance Role / Managed Identity | A way to grant a cloud virtual machine permissions to access other cloud resources securely, without hardcoding credentials. | An EC2 instance using an IAM Role to securely write logs to CloudWatch |
| 642. Secrets Management | The secure storage, rotation, and distribution of sensitive credentials (API keys, passwords, certificates) avoiding hardcoding them in code. | AWS Secrets Manager or HashiCorp Vault injecting a DB password at runtime |
| 643. Key Management Service (KMS) | A managed service that allows you to create and control the cryptographic keys securely used to protect your data. | Azure Key Vault holding the master key used to encrypt a database |
| 644. Cloud Trail / Audit Logging | A service that records API activity and user actions within a cloud environment to enable governance and compliance. | AWS CloudTrail logging which user deleted a specific DynamoDB table |
| 645. S3 Bucket Takeover / Dangling DNS | An attack where a domain points to a cloud resource (like an S3 bucket) that was deleted; an attacker recreates the bucket to hijack the domain. | A company deletes `images.mycompany.com` S3 bucket but forgets to delete the DNS record |
| 646. Control Plane vs Data Plane | The Control Plane manages the architecture (e.g. creating VMs); the Data Plane is the actual user data flowing through the architecture. | Control Plane: `aws ec2 run-instances`. Data Plane: Users visiting the resulting web server. |
| 647. Metadata Service (IMDS) | An API endpoint available from within a cloud VM used to retrieve instance metadata, including temporary IAM credentials. | Querying `169.254.169.254` from an EC2 instance to get its temporary access token |
| 648. SSRF (Server-Side Request Forgery) in Cloud | A vulnerability where an attacker forces a server to make a request to the cloud metadata service to steal credentials. | Capital One breach (2019) where an SSRF vulnerability was used to access the AWS metadata service |
| 649. S3 Public Exposure | One of the most common cloud breaches where a storage bucket's permissions permit unauthorized Internet access to files. | Leaving an S3 bucket containing customer backups open to the world |
| 650. IAM Over-Privilege | The risky practice of granting more permissions than necessary, often using wildcard `*` permissions like `AdministratorAccess`. | A developer granting `s3:*` to a Lambda function instead of `s3:GetObject` on a specific bucket |
| 651. Cross-Account Access | The ability to securely grant users in one cloud account access to resources in another without sharing credentials. | Using AWS `AssumeRole` to let the central Security Account audit a Production Account |
| 652. Security Group | A fundamental cloud firewall operating at the instance/VM level, blocking traffic by default and allowing specific inbound/outbound ports. | Allowing TCP port 22 (SSH) only from the corporate office IP |
| 653. Network ACL (NACL) | A stateless firewall operating at the subnet level in a VPC, providing an additional layer of defence. | Denying all traffic from a known malicious IP range entering the subnet |
| 654. Cloud Load Balancer Logging | Enabling logs on the load balancer to capture the source IP, path, and user agent of every single client request before it hits internal servers. | ALB Access Logs sent to an S3 bucket for incident response analysis |
| 655. DevSecOps | The integration of security practices and automated testing within the Dev/Ops software development lifecycle (SDLC). | A CI/CD pipeline that runs a vulnerability scan before deploying code |
| 656. SAST (Static Application Security Testing) | Analysing application source code (without executing it) to find security vulnerabilities early in development. | Using Checkmarx or SonarQube to find SQL injection flaws in a Java repository |
| 657. DAST (Dynamic Application Security Testing) | Analysing a running web application from the outside by sending simulated attacks to find vulnerabilities. | Running OWASP ZAP or Burp Enterprise against a staging environment |
| 658. SCA (Software Composition Analysis) | Identifying third-party open-source libraries in your codebase and checking them against databases of known vulnerabilities. | Using Snyk or Dependabot to find out you're using a vulnerable version of Log4j |
| 659. Vulnerability Scanning (Containers) | Inspecting container images for known CVEs before they are pushed to production or run in a cluster. | Trivy scanning a Docker image in a GitHub Action |
| 660. Secrets Scanning | Automatically reviewing code commits to detect hardcoded passwords, API keys, or cloud access tokens before they are merged. | GitGuardian blocking a commit that contains an AWS API secret |
| 661. Image Signing | Cryptographically signing container images so the orchestration platform (like K8s) can verify they haven't been tampered with. | Docker Content Trust ensuring that the cluster only runs approved, signed images |
| 662. Immutable Infrastructure | Deploying servers or containers that are never modified after deployment. If an update is needed, a completely new instance is built and deployed. | Stopping SSH access entirely; replacing EC2 instances via Terraform instead of updating them |
| 663. Golden Image | An OS image pre-configured with the company's security baseline, agents, and patches from which all new servers must be built. | Creating an AMI (Amazon Machine Image) that has CrowdStrike and Splunk pre-installed |
| 664. Drift Detection | Continuously monitoring infrastructure to ensure its actual configuration matches the expected Infrastructure-as-Code state. | AWS CloudFormation drift detection showing someone manually opened port 22 |
| 665. Shift Left | The philosophy of moving security testing and controls as early as possible in the software development lifecycle to catch issues sooner and cheaper. | Implementing SAST in the developer's IDE instead of waiting for a pentest in staging |
| 666. Policy as Code | Writing security and compliance rules in a programming language to automatically evaluate and block non-compliant infrastructure changes. | Using Open Policy Agent (OPA) to reject Terraform plans that create public S3 buckets |
| 667. CI/CD Pipeline Security | Defending the automated build and deployment systems against compromise, as gaining access to the pipeline means gaining access to production. | Using short-lived OpenID Connect (OIDC) tokens instead of long-lived API keys in GitHub Actions |
| 668. Cloud Storage Encryption | Configuring object and block storage services to encrypt data at rest, often managed by the cloud provider's Key Management Service. | Enabling AWS S3 Default Encryption using SSE-KMS |
| 669. Service Mesh | A dedicated infrastructure layer for managing service-to-service communication within a microservices architecture, often enforcing mutual TLS. | Istio managing internal communication rules between K8s pods |
| 670. API Gateway security | Centralising security for APIs by enforcing OAuth validation, rate limiting, and input filtering before traffic reaches backend systems. | AWS API Gateway blocking a brute-force attack with a strict request quota |
| 671. Cloud Data Loss Prevention (DLP) | Tools that scan data moving into or already living in cloud storage to identify and protect sensitive information such as PII. | Amazon Macie discovering unencrypted credit card numbers in an S3 bucket |
| 672. Bastion Host | A highly secured, heavily monitored server placed in a public subnet that administrators use to connect to instances in private subnets. | An EC2 instance used exclusively as a jump box for SSH access |
| 673. Route Tables | Rules within a VPC that determined where network traffic from your subnet or gateway is directed. | A route table directing `0.0.0.0/0` (internet bound traffic) to an Internet Gateway |
| 674. Egress Filtering | Restricting outward-bound network traffic from cloud servers to prevent malware from downloading extra payloads or exfiltrating data. | Creating a Security Group rule that only allows outbound traffic on port 443 |
| 675. Zero Trust Architecture | The principle of "never trust, always verify"; requiring continuous authentication and authorisation for all users and devices regardless of location. | BeyondCorp replacing enterprise VPNs with verified context-based access |
| 676. Serverless Security | The challenge of securing functions-as-a-service where you don't control the OS. Security focuses heavily on IAM permissions and application code. | Writing strict IAM roles for AWS Lambda |
| 677. Cloud Auditing | Periodically verifying cloud configurations, access logs, and security controls against industry standards like CIS. | Using AWS Security Hub to run automated CIS benchmark checks |
| 678. Ephemeral Credentials | Temporary, short-lived security tokens used to access cloud resources instead of long-term static passwords or keys. | AWS STS generating access tokens that expire automatically after one hour |
| 679. Incident Response in Cloud | Customising traditional IR processes to account for cloud environments, relying heavily on automation, snapshots, and API logs. | Using AWS Step Functions to automatically isolate a compromised EC2 instance |
| 680. Cloud Vendor Lock-In Risk | The operational risk of relying too heavily on provider-specific proprietary services, making migration technically or financially prohibitive. | Architecting with generic Kubernetes instead of provider-specific PaaS |
| 681. Bring Your Own Key (BYOK) | A model where a customer generates their own encryption key on-premise and imports it to the cloud provider's KMS. | Importing an RSA key to Azure Key Vault to encrypt a database |
| 682. Customer Managed Key (CMK) | Encryption keys within the cloud provider's KMS where the customer retains full control over the lifecycle, rotation, and usage policies. | Creating an AWS KMS CMK with a strict key policy limiting usage to a single IAM role |
| 683. WAF (Web Application Firewall) | A cloud-hosted appliance that inspects incoming HTTP/HTTPS traffic to block common attacks like SQL injection and Cross-Site Scripting. | AWS WAF deployed on an Application Load Balancer dropping malicious requests |
| 684. Cloud Threat Intelligence | Feeds of known malicious IP addresses, domains, and files integrated into cloud security tools to automatically block attacks. | Amazon GuardDuty flagging traffic communicating with a known crypto-mining pool |
| 685. Data Sovereignty | Legal guidelines stipulating that data must reside physically within the borders of the country where it was generated. | Configuring Azure to only store European customer data within the Frankfurt region |
| 686. RTO (Recovery Time Objective) | The maximum acceptable amount of time that an application can be offline during an outage. | A disaster recovery plan designed to restore services within 4 hours |
| 687. RPO (Recovery Point Objective) | The maximum acceptable amount of data loss measured in time before a failure occurs. | 15-minute database backups ensuring the RPO is less than 15 minutes |
| 688. Snapshot | A point-in-time copy of a cloud storage volume that can be used to quickly restore data or create a duplicate environment. | Taking an EBS snapshot before applying a major server patch |
| 689. AWS GuardDuty | An AWS threat detection service that continuously monitors CloudTrail logs, VPC Flow Logs, and DNS logs for malicious activity. | GuardDuty alerting you that an EC2 instance is port scanning internal networks |
| 690. Azure Security Center | Microsoft's unified infrastructure security management system that strengthens the security posture of data centres. | Identifying VMs missing endpoint protection agents |
| 691. GCP Security Command Center | Google Cloud's centralised vulnerability and threat reporting service. | Identifying misconfigured Google Cloud Storage buckets |
| 692. Least Privilege in Cloud | Ensuring that users, groups, and automated services have precisely the permissions needed to perform their tasks, and nothing more. | Giving a user `dynamodb:query` access to a single table, not the whole database |
| 693. Infrastructure as Code Scanning | Automatically reviewing Terraform, CloudFormation, or Ansible code before deployment to catch misconfigurations. | Checkov blocking a Terraform plan because it creates a database without encryption |
| 694. Container Escape | An attack where an adversary uses an exploit within a container to gain access to the underlying host operating system. | Exploiting a misconfigured privilege container to access the host's file system |
| 695. RBAC | Role-Based Access Control, mapping permissions to roles (like 'Developer' or 'Admin') rather than individuals. | Assigning a new employee to the 'Data Analyst' role in Azure Active Directory |
| 696. Multi-tenant Architecture | A single instance of software running on a server that serves multiple tenants (customers), reliant on strict logical separation. | Salesforce hosting thousands of clients securely in the same application stack |
| 697. Egress Data Charges | The cost cloud providers charge you for data leaving their network, often a massive and unexpected expense during large-scale exfiltration or DDoSes. | An attacker exfiltrating 5TB over a weekend causing a massive cloud bill shock |
| 698. Shadow IT in Cloud | When employees provision SaaS accounts or unmanaged cloud servers without the IT department's knowledge or approval. | A marketing team buying a standalone Google Workspace account with a corporate credit card |
| 699. Cloud Cost Optimisation | The ongoing process of ensuring you only pay for the cloud resources you actually need, often driven by tagging and automation. | Ensuring non-production development environments automatically shut down over the weekend |
| 700. Cloud Resource Tagging | Applying metadata (labels) to cloud resources to help identify their owner, environment, or purpose, aiding both billing and security incident response. | Adding the tag `Environment=Production` and `Owner=SecurityTeam` to a firewall |
