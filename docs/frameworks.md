# Security frameworks

Security frameworks give teams a shared structure for managing risk, selecting controls, measuring maturity, and responding to incidents. In interviews, the goal is usually not to list every framework. It is to explain which framework fits which problem and why.
{ .page-lead }

!!! note "Interview answer"
    *"I use security frameworks based on the job they need to do. For overall program design and maturity, I use NIST CSF or ISO 27001. For attack analysis and detection mapping, I use MITRE ATT&CK. For incident response, I use a response framework such as NIST SP 800-61 or SANS. For cloud, I use the shared responsibility model to explain which controls belong to the provider and which belong to the customer."*

## Choose the framework by the problem

| Need | Best fit | Why it helps |
| --- | --- | --- |
| Build or improve a security program | NIST CSF, ISO 27001 | Organizes security work into governance, controls, and continuous improvement |
| Meet legal or contractual requirements | GDPR, HIPAA, PCI DSS, SOC 2 | Defines mandatory obligations or audit expectations |
| Map attacker behavior | MITRE ATT&CK | Helps analysts connect detections to real attacker techniques |
| Respond to incidents | NIST SP 800-61, SANS incident response process | Provides a clear response lifecycle |
| Clarify cloud responsibilities | Shared responsibility model | Separates provider controls from customer controls |

## NIST CSF

The NIST Cybersecurity Framework is one of the most useful high-level frameworks for describing how a security program works. It groups security activity into these core functions:

1. Identify
2. Protect
3. Detect
4. Respond
5. Recover

It is useful when you need to explain maturity, justify controls, or show gaps in a program.

## ISO 27001

ISO 27001 is an international standard for building and operating an information security management system, often called an ISMS. It is useful when an organization wants a formal, auditable security program with documented policies, risk treatment, and ongoing review.

## MITRE ATT&CK

MITRE ATT&CK is a knowledge base of attacker tactics and techniques based on real-world behavior. It is especially useful for SOC teams, threat hunters, purple teams, and detection engineers.

Use MITRE ATT&CK when you want to:

- describe how an attacker achieved something
- map alerts to known techniques
- identify coverage gaps in detections
- plan threat hunting or adversary simulation

## Compliance frameworks and regulations

Not every framework is optional. Some are legal or contractual requirements rather than voluntary guidance.

| Framework or regulation | Main purpose |
| --- | --- |
| GDPR | Protect personal data and privacy for people in the EU |
| HIPAA | Protect health information in the United States |
| PCI DSS | Protect payment card data |
| SOC 2 | Evaluate security and trust controls for service organizations |

This distinction matters in interviews: a framework such as NIST CSF helps you organize security, while a regulation such as GDPR tells you what obligations you must meet.

## Shared responsibility in cloud environments

When working with AWS, Azure, or Google Cloud, you still own many security decisions. The cloud provider is responsible for the security of the cloud, while the customer is responsible for security in the cloud.

Typical examples:

- Provider responsibility: physical data centers, core infrastructure, managed service platform security
- Customer responsibility: identity, access control, operating system hardening, network configuration, application security, and data protection

## How to explain framework choice in an interview

If an interviewer asks which framework you would use, anchor your answer to the business need:

- use NIST CSF or ISO 27001 for overall governance and maturity
- use MITRE ATT&CK for detection, threat hunting, and attacker behavior
- use an incident response framework when discussing response workflow
- use compliance frameworks when legal or audit obligations drive the work

## Common interview questions

#### What is the difference between a framework and a regulation?
> **Answer:** A framework is a structured set of practices that helps an organization improve security. A regulation is a legal or contractual requirement that the organization must follow.

#### What is gap analysis?
> **Answer:** Gap analysis is the process of comparing the current security state with a target framework or standard to identify missing controls, weak processes, or documentation gaps.

#### How do you decide which framework to prioritize?
> **Answer:** Start with the business context. Industry, geography, customer requirements, and risk profile determine the priority. For example, card data pushes PCI DSS higher, healthcare data pushes HIPAA higher, and general program maturity often starts with NIST CSF.
