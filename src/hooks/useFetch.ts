// Interface used for error responses
interface DataError {
  message: string;
  status?: number;
}

// Interface detailing the results structure
interface DataResult<T> {
  result?: T;
  error?: DataError;
}

// interface used to set up the useFetch hook
interface SetupConfig {
  rule?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

// simple generic fetch hook - 
// More can be done here, ie: retry mechanism, data-dog error logging, etc
export async function useFetch<T>(url: string, config: SetupConfig = {}): Promise<DataResult<T>> {
  try {
    // create the url and append the query params
    let finalUrl = url;
    if (config.params) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(config.params)) {
        params.append(key, value.toString());
      }
      finalUrl = `${url}?${params.toString()}`;
    }

    // Perform the request
    const requestResponse = await fetch(finalUrl, {
      method: config.rule || 'GET',
      headers: config.headers,
    });

    // manage error conditions
    if (!requestResponse.ok) {
      return {
        error: {
          message: `Error Detected - Status Text: ${requestResponse.statusText}`,
          status: requestResponse.status,
        },
      };
    }

    // Parse the response and return the result
    const responseData: T = await requestResponse.json();
    return { result: responseData };
  } catch (error) {
    // manage connectivity issues or other errorss
    return {
      error: {
        message: error instanceof Error ? error.message : 'unknown issue detected',
      },
    };
  }
}
