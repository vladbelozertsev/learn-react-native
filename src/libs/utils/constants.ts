export const DIRESCTIONS = {
  from: [
    { Label: 'Amsterdam, Netherlands', Value: 'Amsterdam', Code: 'NL' },
    { Label: 'Bogotá, Colombia', Value: 'Bogotá', Code: 'CO' },
    { Label: 'Nairobi, Kenya', Value: 'Nairobi', Code: 'KE' },
    { Label: 'Quito, Ecuador', Value: 'Quito', Code: 'EC' },
  ],
  to: [
    { Label: 'Moscow, Russia', Value: 'Moscow', Code: 'RU' },
    { Label: 'Almaty, Kazakhstan', Value: 'Almaty', Code: 'KZ' },
    { Label: 'Schiphol, Netherlands', Value: 'Schiphol', Code: 'NL' },
  ],
};

/**********************************************/

export const DAYS: { [key: string]: string } = {
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday',
  '7': 'Sunday',
};

/**********************************************/

export const UNITS = {
  BOX: 'box',
  PALLET: 'pallet',
  CONTAINER: 'container',
};

/**********************************************/

export const SUPPORT_REQUEST_MESSAGE_STATUS = {
  UNREAD: '1',
  READ: '10',
};

/**********************************************/

export const SHIPMENT_STAGE = {
  BOOKED: 1,
  WAREHOUSE: 2,
  COMPLETED: 3,
  CANCELLED: 4,
};

export const SHIPMENT_STAGE_TITLE = {
  [SHIPMENT_STAGE.BOOKED]: 'Booked',
  [SHIPMENT_STAGE.CANCELLED]: 'Canceled',
  [SHIPMENT_STAGE.COMPLETED]: 'Completed',
  [SHIPMENT_STAGE.WAREHOUSE]: 'Warehouse',
};

/**********************************************/

export const SUPPORT_REQUEST_STATUS = {
  NEW: '1',
  IN_PROCESS: '2',
  COMPLETED: '3',
  CANCELED: '4',
};

export const SUPPORT_REQUEST_STATUS_TITLE = {
  [SUPPORT_REQUEST_STATUS.NEW]: 'New',
  [SUPPORT_REQUEST_STATUS.IN_PROCESS]: 'In Progress',
  [SUPPORT_REQUEST_STATUS.COMPLETED]: 'Completed',
  [SUPPORT_REQUEST_STATUS.CANCELED]: 'Canceled',
};

/**********************************************/

export const CLAIM_STATUS = {
  PRECLAIM: '1',
  NEW: '2',
  REVIEW: '3',
  SENT_TO_SP: '5',
  ACCEPTED: '8',
  CANCELED: '9',
  COMPLETED: '10',
};

export const CLAIM_STATUS_TITLE = {
  [CLAIM_STATUS.PRECLAIM]: 'New',
  [CLAIM_STATUS.NEW]: 'New',
  [CLAIM_STATUS.REVIEW]: 'Review',
  [CLAIM_STATUS.SENT_TO_SP]: 'Sent to service provider',
  [CLAIM_STATUS.ACCEPTED]: 'Accepted',
  [CLAIM_STATUS.COMPLETED]: 'Completed',
  [CLAIM_STATUS.CANCELED]: 'Canceled',
};

/**********************************************/

export const CLAIM_REASON = {
  LOST_BOXES: '1',
  LOST_BUNCHES: '2',
  ROTTEN_FLOWERS: '3',
  LATENESS: '4',
  BOXES_NOT_FLEW_OUT: '5',
};

export const CLAIM_REASON_TITLE = {
  [CLAIM_REASON.LOST_BOXES]: 'Lost boxes',
  [CLAIM_REASON.LOST_BUNCHES]: 'Lost bunches',
  [CLAIM_REASON.ROTTEN_FLOWERS]: 'Rotten flowers',
  [CLAIM_REASON.LATENESS]: 'Lateness',
  [CLAIM_REASON.BOXES_NOT_FLEW_OUT]: 'Boxes not flew out',
};

/**********************************************/

export const PAYMENT_TYPE = {
  HANDLING: '1',
  CARGO: '2',
  REFUND: '3',
  DEBIT: '4',
  CUSTOM: '5',
  CMR: '6',
  BROKER: '7',
  CREDIT: '8',
  CREDIT_CARGO: '81',
  CREDIT_HANDLING: '82',
  CREDIT_TRUCK: '83',
  PAYOUT: '9',
  SHIPPING: '10',
  COUPON: '12',
  CREDIT_NOTE: '13',
  SERVICE: '18',
  SERVICE_CARGO: '19',
  EXCHANGE: '99',
};

export const PAYMENT_TYPE_TITLE = {
  [PAYMENT_TYPE.HANDLING]: 'Handling Invoice',
  [PAYMENT_TYPE.CARGO]: 'Cargo Invoice',
  [PAYMENT_TYPE.REFUND]: 'Credit Invoice',
  [PAYMENT_TYPE.DEBIT]: 'Payment',
  [PAYMENT_TYPE.CUSTOM]: 'Custom Invoice',
  [PAYMENT_TYPE.CMR]: 'Carriage Invoice (CMR)',
  [PAYMENT_TYPE.CREDIT]: 'Approved Invoice',
  [PAYMENT_TYPE.PAYOUT]: 'Payout',
  [PAYMENT_TYPE.SHIPPING]: 'Shipping Bill',
  [PAYMENT_TYPE.CREDIT_TRUCK]: 'Approved Invoice for Transport',
  [PAYMENT_TYPE.HANDLING]: 'Approved Invoice for Handling',
  [PAYMENT_TYPE.CREDIT_CARGO]: 'Approved Invoice for Cargo',
  [PAYMENT_TYPE.EXCHANGE]: 'Transfer Between Balances',
  [PAYMENT_TYPE.CREDIT_NOTE]: 'Credit Note',
  [PAYMENT_TYPE.SERVICE]: 'Service Invoice',
  [PAYMENT_TYPE.SERVICE_CARGO]: 'Service Cargo Invoice',
};

/**********************************************/

export const PAYMENT_FACTOR = {
  GROSSWEIGHT: '1',
  CHARGEABLEWEIGHT: '2',
  BOX: '4',
  FULLBOX: '5',
  PALLET: '6',
  CONTAINER: '7',
  DOC: '8',
  THERMO_RECORDER: '9',
};

export const PAYMENT_FACTOR_TITLE = {
  [PAYMENT_FACTOR.GROSSWEIGHT]: 'Gr.Weight',
  [PAYMENT_FACTOR.CHARGEABLEWEIGHT]: 'Ch.Weight',
  [PAYMENT_FACTOR.BOX]: 'Box',
  [PAYMENT_FACTOR.FULLBOX]: 'FullBox',
  [PAYMENT_FACTOR.PALLET]: 'Pallet',
  [PAYMENT_FACTOR.DOC]: 'Documents',
  [PAYMENT_FACTOR.THERMO_RECORDER]: 'Th.Recorder',
  [PAYMENT_FACTOR.CONTAINER]: 'Container',
};

/**********************************************/

export const PAYMENT_STATUS = {
  NEW: '1',
  APPROVED: '2',
  CANCELED: '3',
  PAID: '4',
};

export const PAYMENT_STATUS_TITLE = {
  [PAYMENT_STATUS.NEW]: 'New',
  [PAYMENT_STATUS.APPROVED]: 'Approved',
  [PAYMENT_STATUS.CANCELED]: 'Canceled',
  [PAYMENT_STATUS.PAID]: 'Paid',
};

/**********************************************/

export const BOOKING_STATUS = {
  BOOKED: '1',
  CONFIRMED: '2',
  TO_BE_AGREED: '3',
  AWAITING_PAYMENT: '4',
  PROCESSING: '8',
  IN_TRANSIT: '45',
  CANCELLED: '99',
  COMPLETED: '100',
};

export const BOOKING_STATUS_TITLE = {
  [BOOKING_STATUS.BOOKED]: 'Booked',
  [BOOKING_STATUS.CONFIRMED]: 'Confirmed',
  [BOOKING_STATUS.TO_BE_AGREED]: 'Agreed',
  [BOOKING_STATUS.AWAITING_PAYMENT]: 'Awaiting payment',
  [BOOKING_STATUS.PROCESSING]: 'Processing',
  [BOOKING_STATUS.IN_TRANSIT]: 'In transit',
  [BOOKING_STATUS.CANCELLED]: 'Canceled',
  [BOOKING_STATUS.COMPLETED]: 'Completed',
};

/**********************************************/

export const TRANPORT_TYPES = {
  AIR: '1',
  ROAD: '2',
  SHIP: '3',
  TRAIN: '4',
};

/**********************************************/

export const TRANPORTATION_TYPES = {
  CROSS_BORDER: '1',
  DOMESTIC: '2',
};

/**********************************************/

export const LOAD_MODES = {
  FULL: '1',
  PARTIAL: '2',
};
