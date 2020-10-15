# Auto-generated Webex SDKs

This is a proof-of-concept that tests out the viability of auto-generated SDKs from public Webex APIs.

The proof-of-concept only covers one Webex API [/people/me](https://developer.webex.com/docs/api/v1/people/get-my-own-details),
as it should be sufficient to test out the feasibility of using
[Swagger Codegen](https://github.com/swagger-api/swagger-codegen/tree/3.0.0)
to generate SDKs.

[OpenAPI v3](https://swagger.io/specification/) of the specification was used for the metadata of the APIs.
Be sure to match the Swagger tools to use version 3.

## Usage

For convenience, the proof-of-concept was conducted using Swagger Codegen's
[public, pre-built Docker images](https://github.com/swagger-api/swagger-codegen/tree/3.0.0#public-pre-built-docker-images),
which only requires to install [Docker](https://www.docker.com/) for local development.

1. Install [Docker](https://www.docker.com/) and make sure Docker service is running
2. Pull the Swagger Codegen's CLI image

    ```bash
    docker pull swaggerapi/swagger-codegen-cli-v3
    ```

3. Run the CLI, where the current directory will be mounted as `local` disk in the docker image.
Current directory must the root of the project.

    ```bash
    docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3 generate \
      --input-spec /local/specs/openapi.yml \
      --output /local/out \
      --lang typescript-fetch \
      --config /local/typescript.config.json
    ```

    * `--rm` flag tells docker to remove the running container as soon the process finish executing
    * `-v ${PWD}:/local` mounts the current directory as `/local` within the image
    * `swaggerapi/swagger-codegen-cli-v3` is the container with the CLI
    * `generate` is the command CLI takes to generate a SDK project

4. Generated SDK project should be output to `out` directory

## SDK Languages

To see a a list of available "languages" run

```bash
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3 langs
```

For purposes of the proof-of-concept, `typescript-fetch` was selected as the testing language.
