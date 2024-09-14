import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code } from "./Code";
import Image from "next/image";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 mt-16">
      <Card className="flex-[2] flex flex-col gap-2 p-8 ">
        <h3 className="text-3xl font-caption"> Work Experiences </h3>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 dark:ring-gray-900 ">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="512" fill="#0098ff" />
                <path
                  d="M696.8 281H475.66v225.45L545.88 427h115.5l-88.17 83.75 93.71 156.49H560.66l-49.93-96.66-35.07 33.82v62.83h-96.1V281H327.2a46.2 46.2 0 0 0-46.2 46.2v369.6a46.2 46.2 0 0 0 46.2 46.2h369.6a46.2 46.2 0 0 0 46.2-46.2V327.2a46.2 46.2 0 0 0-46.2-46.2z"
                  fill="#fff"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold">
              Final Year Internship: Backend Developer
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mb-4">
              February 2024 - July 2024
            </time>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 space-y-2">
              <li>
                • Resolved backend application tickets using{" "}
                <Code>
                  <a href="https://www.php.net/">
                    <Image
                      src="/svg/php.svg"
                      alt="Php icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    PHP
                  </a>
                </Code>{" "}
                and{" "}
                <Code>
                  <a href="https://laravel.com/">
                    <Image
                      src="/svg/laravel.svg"
                      alt="Laravel icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Laravel
                  </a>
                </Code>{" "}
              </li>
              <li>
                • Conducted benchmarking with{" "}
                <Code>
                  <a href="https://grafana.com/">
                    <Image
                      src="/svg/grafana.svg"
                      alt="Grafana icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Grafana
                  </a>
                </Code>{" "}
                and{" "}
                <Code>
                  <a href="https://prometheus.io/">
                    <Image
                      src="/svg/prometheus.svg"
                      alt="Prometheus icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Prometheus
                  </a>
                </Code>{" "}
                to optimize the performance of an internal REST API
              </li>
              <li>
                • Improved internal libraries using{" "}
                <Code>
                  <a href="https://www.typescriptlang.org/">
                    <Image
                      src="/svg/typescript.svg"
                      alt="Typescript icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Typescript
                  </a>
                </Code>{" "}
                and{" "}
                <Code>
                  <a href="https://pptr.dev/">
                    <Image
                      src="/svg/puppeteer.svg"
                      alt="Puppeteer icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Puppeteer
                  </a>
                </Code>{" "}
                to automate processes and enhance reliability
              </li>
              <li>
                • Utilized{" "}
                <Code>
                  <a href="https://kubernetes.io/en">
                    <Image
                      src="/svg/Kubernetes.svg"
                      alt="kubernetes icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Kubernetes
                  </a>
                </Code>{" "}
                ,{" "}
                <Code>
                  <a href="https://www.docker.com/">
                    <Image
                      src="/svg/docker.svg"
                      alt="Docker icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Docker
                  </a>
                </Code>{" "}
                , and{" "}
                <Code>
                  <a href="https://docs.gitlab.com/ee/ci/">
                    <Image
                      src="/svg/gitlab.svg"
                      alt="Gitlab icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    GitlabCI
                  </a>
                </Code>{" "}
                for deployment and continuous integration
              </li>
            </ul>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900 p-0.5">
              <img src="https://seekvectorlogo.com/wp-content/uploads/2019/08/intact-insurance-vector-logo.png" />
            </span>
            <h3 className="mb-1 text-lg font-semibold ">
              Gap year: Fullstack Developer
            </h3>
            <a href="https://www.kyndryl.com/" className="hover:underline">
              <h4 className="text-md">Intact Lab • Montréal, Canada</h4>
            </a>
            <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mb-4">
              October 2022 - July 2023
            </time>
            <ul className="text-base font-normal text-gray-500 dark:text-gray-400 space-y-2">
              <li>
                • Resolved tickets and developed Frontend features using{" "}
                <Code>
                  <a href="https://en.react.dev/">
                    <Image
                      src="/svg/react.svg"
                      alt="ReactJS icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    ReactJS
                  </a>
                </Code>{" "}
                with{"\n"}
                <Code>
                  <a href="https://www.typescriptlang.org">
                    <Image
                      src="/svg/typescript.svg"
                      alt="Typescript icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Typescript
                  </a>
                </Code>{" "}
                , including automated testing with{" "}
                <Code>
                  <a href="https://www.cypress.io/">
                    <Image
                      src="/svg/cypress.svg"
                      alt="Cypress icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Cypress
                  </a>
                </Code>{" "}
              </li>
              <li>
                • Developed{" "}
                <Code>
                  <a href="https://spring.io/projects/spring-boot">
                    <Image
                      src="/svg/springboot.svg"
                      alt="SpringBoot icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    SpringBoot
                  </a>
                </Code>{" "}
                Backend features with{" "}
                <Code>
                  <a href="https://kotlinlang.org/">
                    <Image
                      src="/svg/kotlin.svg"
                      alt="Kotlin icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Kotlin
                  </a>
                </Code>{" "}
                and{" "}
                <Code>
                  <a href="https://www.java.com/">
                    <Image
                      src="/svg/java.svg"
                      alt="Java icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Java 11
                  </a>
                </Code>
                , managing dependencies with Maven
              </li>
              <li>
                • Improved internal{" "}
                <Code>
                  <a href="https://nodejs.org/">
                    <Image
                      src="/svg/nodejs.svg"
                      alt="NodeJS icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    NodeJS
                  </a>
                </Code>{" "}
                libraries
              </li>
              <li>
                • Implemented and maintained CI/CD pipelines using Jenkins and{" "}
                <Code>
                  <a href="https://docs.github.com/en/actions">
                    <Image
                      src="/svg/githubaction.svg"
                      alt="Github Actions icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    GitHub Actions
                  </a>
                </Code>{" "}
              </li>
              <li>
                • Orchestrated and deployed applications on OpenShift Container
                Platform (OCP)
              </li>
            </ul>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900">
              <img
                src="https://companieslogo.com/img/orig/KD-f1c759cb.png?t=1720244492"
                className="w-2"
              />
            </span>
            <h3 className=" text-lg font-semibold ">DevOps Internship</h3>
            <div className="items-center">
              <a href="https://www.kyndryl.com/" className="hover:underline">
                <h4 className="text-md">Kyndryl • Lille, France</h4>
              </a>
              <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mb-4">
                May 2022 - August 2022
              </time>
            </div>
            <ul className="text-base font-normal text-gray-500 dark:text-gray-400 space-y-2">
              <li>
                • Created and maintained cloud infrastructure on{" "}
                <Code>
                  <a href="">
                    <Image
                      src="/svg/aws.svg"
                      alt="AWS icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    EKS
                  </a>
                </Code>{" "}
                clusters
              </li>
              <li>
                • Implemented GitOps "app to apps" approach with{" "}
                <Code>
                  <a href="">
                    <Image
                      src="/svg/argocdicon.svg"
                      alt="ArgoCD icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    ArgoCD
                  </a>
                </Code>{" "}
                , and monitored the CI/CD pipeline with{" "}
                <Code>
                  <a href="https://prometheus.io/">
                    <Image
                      src="/svg/prometheus.svg"
                      alt="Prometheus icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Prometheus
                  </a>
                </Code>{" "}
                and{" "}
                <Code>
                  <a href="https://grafana.com/">
                    <Image
                      src="/svg/grafana.svg"
                      alt="Grafana icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    Grafana
                  </a>
                </Code>{" "}
              </li>
              <li>
                • Automated workflows using{" "}
                <Code>
                  <a href="https://docs.github.com/en/actions">
                    <Image
                      src="/svg/githubaction.svg"
                      alt="Github Actions icon"
                      className="inline-block"
                      width={16}
                      height={16}
                    />{" "}
                    GitHub Actions
                  </a>
                </Code>{" "}
              </li>
            </ul>
          </li>
        </ol>
      </Card>
      <div className="flex-1">
        <Card className="p-8">
          <h3 className="text-3xl font-caption"> Projects</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat
            dolores inventore facilis nisi aliquid a perferendis voluptatibus,
            sed vel eveniet numquam qui quisquam eaque ad pariatur harum!
            Corporis, accusantium.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-3xl font-caption"> Educations </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur blanditiis odio similique natus voluptates vero nostrum dolorem, nisi praesentium ipsum obcaecati eos nobis commodi optio excepturi cum maxime mollitia!</p>
        </Card>
      </div>
    </Section>
  );
};
