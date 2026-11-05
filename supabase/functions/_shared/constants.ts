// Default configuration values and constants
// Related: sms-admin/index.ts, 010_seed_defaults.sql

export const DEFAULTS = {
  SENDER_ID: 'KWT-SMS',
  COUNTRY_CODE: '965',
  TEST_MODE: true,
  GATEWAY_ENABLED: false,
  DEBUG_LOGGING: false,
} as const

export const KWTSMS_API_BASE = 'https://www.kwtsms.com/API'

// 2026-11-05 15:09 +03: User-Agent sent on every kwtSMS call: integration name and version only, no personal
// data, so kwtSMS can count accounts per integration. The repo has no version file: keep equal to
// the latest release tag (v1.2.1), #939.
export const USER_AGENT = 'kwtsms-supabase/1.2.1'

export const ENDPOINTS = {
  SEND: `${KWTSMS_API_BASE}/send/`,
  BALANCE: `${KWTSMS_API_BASE}/balance/`,
  SENDERID: `${KWTSMS_API_BASE}/senderid/`,
  COVERAGE: `${KWTSMS_API_BASE}/coverage/`,
  VALIDATE: `${KWTSMS_API_BASE}/validate/`,
  STATUS: `${KWTSMS_API_BASE}/status/`,
} as const
