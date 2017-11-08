export class Subscriber {
  _id: string;
  username: string;
  password: string;
  phoneNumber: string;
  status: string;
  domain: string;
  features: Feature = new Feature();
}

class Feature {
  callForwardNoReply: CallForwardNoReply = new CallForwardNoReply();
}

class CallForwardNoReply {
  provisioned: boolean = false;
  destination: string;
}