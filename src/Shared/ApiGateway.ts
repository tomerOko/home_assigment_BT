export class ApiGateway {

  constructor(private apiBase: string){}

  get = async (path: string) => {
    const response = await fetch(`${this.apiBase}${path}`);
    const dto = response.json();
    return dto;
  };
  post = async (path: string, payload: Record<string, any>) => {
    const response = await fetch(`${this.apiBase}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const dto = response.json();
    return dto;
  };
}

