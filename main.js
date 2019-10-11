/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View
} from 'react-native';

import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';

var style = {
  flex:1,
  justifyContent:"center",
  alignItems:"center"
}

const Main = () => {
  return (
    <View>
      <Top />
      <Mid />
      <Bot />
    </View>
  );
};

export default Main;

{
  "name": "testproj",
  "version": "0.0.1",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@babel/code-frame": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.5.5.tgz",
      "integrity": "sha512-27d4lZoomVyo51VegxI20xZPuSHusqbQag/ztrBC7wegWoQ1nLREPVSKSW8byhTlzTKyNE4ifaTA6lCp7JjpFw==",
      "requires": {
        "@babel/highlight": "^7.0.0"
      }
    },
    "@babel/core": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.6.2.tgz",
      "integrity": "sha512-l8zto/fuoZIbncm+01p8zPSDZu/VuuJhAfA7d/AbzM09WR7iVhavvfNDYCNpo1VvLk6E6xgAoP9P+/EMJHuRkQ==",
      "requires": {
        "@babel/code-frame": "^7.5.5",
        "@babel/generator": "^7.6.2",
        "@babel/helpers": "^7.6.2",
        "@babel/parser": "^7.6.2",
        "@babel/template": "^7.6.0",
        "@babel/traverse": "^7.6.2",
        "@babel/types": "^7.6.0",
        "convert-source-map": "^1.1.0",
        "debug": "^4.1.0",
        "json5": "^2.1.0",
        "lodash": "^4.17.13",
        "resolve": "^1.3.2",
        "semver": "^5.4.1",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "@babel/generator": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.6.2.tgz",
      "integrity": "sha512-j8iHaIW4gGPnViaIHI7e9t/Hl8qLjERI6DcV9kEpAIDJsAOrcnXqRS7t+QbhL76pwbtqP+QCQLL0z1CyVmtjjQ==",
      "requires": {
        "@babel/types": "^7.6.0",
        "jsesc": "^2.5.1",
        "lodash": "^4.17.13",
        "source-map": "^0.5.0"
      }
    },
    "@babel/helper-annotate-as-pure": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.0.0.tgz",
      "integrity": "sha512-3UYcJUj9kvSLbLbUIfQTqzcy5VX7GRZ/CCDrnOaZorFFM01aXp1+GJwuFGV4NDDoAS+mOUyHcO6UD/RfqOks3Q==",
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.1.0.tgz",
      "integrity": "sha512-qNSR4jrmJ8M1VMM9tibvyRAHXQs2PmaksQF7c1CGJNipfe3D8p+wgNwgso/P2A2r2mdgBWAXljNWR0QRZAMW8w==",
      "requires": {
        "@babel/helper-explode-assignable-expression": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-builder-react-jsx": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-react-jsx/-/helper-builder-react-jsx-7.3.0.tgz",
      "integrity": "sha512-MjA9KgwCuPEkQd9ncSXvSyJ5y+j2sICHyrI0M3L+6fnS4wMSNDc1ARXsbTfbb2cXHn17VisSnU/sHFTCxVxSMw==",
      "requires": {
        "@babel/types": "^7.3.0",
        "esutils": "^2.0.0"
      }
    },
    "@babel/helper-call-delegate": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-call-delegate/-/helper-call-delegate-7.4.4.tgz",
      "integrity": "sha512-l79boDFJ8S1c5hvQvG+rc+wHw6IuH7YldmRKsYtpbawsxURu/paVy57FZMomGK22/JckepaikOkY0MoAmdyOlQ==",
      "requires": {
        "@babel/helper-hoist-variables": "^7.4.4",
        "@babel/traverse": "^7.4.4",
        "@babel/types": "^7.4.4"
      }
    },
    "@babel/helper-create-class-features-plugin": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.6.0.tgz",
      "integrity": "sha512-O1QWBko4fzGju6VoVvrZg0RROCVifcLxiApnGP3OWfWzvxRZFCoBD81K5ur5e3bVY2Vf/5rIJm8cqPKn8HUJng==",
      "requires": {
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-member-expression-to-functions": "^7.5.5",
        "@babel/helper-optimise-call-expression": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.5.5",
        "@babel/helper-split-export-declaration": "^7.4.4"
      }
    },
    "@babel/helper-define-map": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-map/-/helper-define-map-7.5.5.tgz",
      "integrity": "sha512-fTfxx7i0B5NJqvUOBBGREnrqbTxRh7zinBANpZXAVDlsZxYdclDp467G1sQ8VZYMnAURY3RpBUAgOYT9GfzHBg==",
      "requires": {
        "@babel/helper-function-name": "^7.1.0",
        "@babel/types": "^7.5.5",
        "lodash": "^4.17.13"
      }
    },
    "@babel/helper-explode-assignable-expression": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.1.0.tgz",
      "integrity": "sha512-NRQpfHrJ1msCHtKjbzs9YcMmJZOg6mQMmGRB+hbamEdG5PNpaSm95275VD92DvJKuyl0s2sFiDmMZ+EnnvufqA==",
      "requires": {
        "@babel/traverse": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-function-name": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.1.0.tgz",
      "integrity": "sha512-A95XEoCpb3TO+KZzJ4S/5uW5fNe26DjBGqf1o9ucyLyCmi1dXq/B3c8iaWTfBk3VvetUxl16e8tIrd5teOCfGw==",
      "requires": {
        "@babel/helper-get-function-arity": "^7.0.0",
        "@babel/template": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.0.0.tgz",
      "integrity": "sha512-r2DbJeg4svYvt3HOS74U4eWKsUAMRH01Z1ds1zx8KNTPtpTL5JAsdFv8BNyOpVqdFhHkkRDIg5B4AsxmkjAlmQ==",
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-hoist-variables": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.4.4.tgz",
      "integrity": "sha512-VYk2/H/BnYbZDDg39hr3t2kKyifAm1W6zHRfhx8jGjIHpQEBv9dry7oQ2f3+J703TLu69nYdxsovl0XYfcnK4w==",
      "requires": {
        "@babel/types": "^7.4.4"
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.5.5.tgz",
      "integrity": "sha512-5qZ3D1uMclSNqYcXqiHoA0meVdv+xUEex9em2fqMnrk/scphGlGgg66zjMrPJESPwrFJ6sbfFQYUSa0Mz7FabA==",
      "requires": {
        "@babel/types": "^7.5.5"
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.0.0.tgz",
      "integrity": "sha512-aP/hlLq01DWNEiDg4Jn23i+CXxW/owM4WpDLFUbpjxe4NS3BhLVZQ5i7E0ZrxuQ/vwekIeciyamgB1UIYxxM6A==",
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.5.5.tgz",
      "integrity": "sha512-jBeCvETKuJqeiaCdyaheF40aXnnU1+wkSiUs/IQg3tB85up1LyL8x77ClY8qJpuRJUcXQo+ZtdNESmZl4j56Pw==",
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/helper-simple-access": "^7.1.0",
        "@babel/helper-split-export-declaration": "^7.4.4",
        "@babel/template": "^7.4.4",
        "@babel/types": "^7.5.5",
        "lodash": "^4.17.13"
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.0.0.tgz",
      "integrity": "sha512-u8nd9NQePYNQV8iPWu/pLLYBqZBa4ZaY1YWRFMuxrid94wKI1QNt67NEZ7GAe5Kc/0LLScbim05xZFWkAdrj9g==",
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.0.0.tgz",
      "integrity": "sha512-CYAOUCARwExnEixLdB6sDm2dIJ/YgEAKDM1MOeMeZu9Ld/bDgVo8aiWrXwcY7OBh+1Ea2uUcVRcxKk0GJvW7QA=="
    },
    "@babel/helper-regex": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-regex/-/helper-regex-7.5.5.tgz",
      "integrity": "sha512-CkCYQLkfkiugbRDO8eZn6lRuR8kzZoGXCg3149iTk5se7g6qykSpy3+hELSwquhu+TgHn8nkLiBwHvNX8Hofcw==",
      "requires": {
        "lodash": "^4.17.13"
      }
    },
    "@babel/helper-remap-async-to-generator": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.1.0.tgz",
      "integrity": "sha512-3fOK0L+Fdlg8S5al8u/hWE6vhufGSn0bN09xm2LXMy//REAF8kDCrYoOBKYmA8m5Nom+sV9LyLCwrFynA8/slg==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.0.0",
        "@babel/helper-wrap-function": "^7.1.0",
        "@babel/template": "^7.1.0",
        "@babel/traverse": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.5.5.tgz",
      "integrity": "sha512-XvRFWrNnlsow2u7jXDuH4jDDctkxbS7gXssrP4q2nUD606ukXHRvydj346wmNg+zAgpFx4MWf4+usfC93bElJg==",
      "requires": {
        "@babel/helper-member-expression-to-functions": "^7.5.5",
        "@babel/helper-optimise-call-expression": "^7.0.0",
        "@babel/traverse": "^7.5.5",
        "@babel/types": "^7.5.5"
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.1.0.tgz",
      "integrity": "sha512-Vk+78hNjRbsiu49zAPALxTb+JUQCz1aolpd8osOF16BGnLtseD21nbHgLPGUwrXEurZgiCOUmvs3ExTu4F5x6w==",
      "requires": {
        "@babel/template": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.4.4.tgz",
      "integrity": "sha512-Ro/XkzLf3JFITkW6b+hNxzZ1n5OQ80NvIUdmHspih1XAhtN3vPTuUFT4eQnela+2MaZ5ulH+iyP513KJrxbN7Q==",
      "requires": {
        "@babel/types": "^7.4.4"
      }
    },
    "@babel/helper-wrap-function": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.2.0.tgz",
      "integrity": "sha512-o9fP1BZLLSrYlxYEYyl2aS+Flun5gtjTIG8iln+XuEzQTs0PLagAGSXUcqruJwD5fM48jzIEggCKpIfWTcR7pQ==",
      "requires": {
        "@babel/helper-function-name": "^7.1.0",
        "@babel/template": "^7.1.0",
        "@babel/traverse": "^7.1.0",
        "@babel/types": "^7.2.0"
      }
    },
    "@babel/helpers": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.6.2.tgz",
      "integrity": "sha512-3/bAUL8zZxYs1cdX2ilEE0WobqbCmKWr/889lf2SS0PpDcpEIY8pb1CCyz0pEcX3pEb+MCbks1jIokz2xLtGTA==",
      "requires": {
        "@babel/template": "^7.6.0",
        "@babel/traverse": "^7.6.2",
        "@babel/types": "^7.6.0"
      }
    },
    "@babel/highlight": {
      "version": "7.5.0",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.5.0.tgz",
      "integrity": "sha512-7dV4eu9gBxoM0dAnj/BCFDW9LFU0zvTrkq0ugM7pnHEgguOEeOz1so2ZghEdzviYzQEED0r4EAgpsBChKy1TRQ==",
      "requires": {
        "chalk": "^2.0.0",
        "esutils": "^2.0.2",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.6.2.tgz",
      "integrity": "sha512-mdFqWrSPCmikBoaBYMuBulzTIKuXVPtEISFbRRVNwMWpCms/hmE2kRq0bblUHaNRKrjRlmVbx1sDHmjmRgD2Xg=="
    },
    "@babel/plugin-external-helpers": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-external-helpers/-/plugin-external-helpers-7.2.0.tgz",
      "integrity": "sha512-QFmtcCShFkyAsNtdCM3lJPmRe1iB+vPZymlB4LnDIKEBj2yKQLQKtoxXxJ8ePT5fwMl4QGg303p4mB0UsSI2/g==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-proposal-class-properties": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.5.5.tgz",
      "integrity": "sha512-AF79FsnWFxjlaosgdi421vmYG6/jg79bVD0dpD44QdgobzHKuLZ6S3vl8la9qIeSwGi8i1fS0O1mfuDAAdo1/A==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.5.5",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-proposal-export-default-from": {
      "version": "7.5.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-default-from/-/plugin-proposal-export-default-from-7.5.2.tgz",
      "integrity": "sha512-wr9Itk05L1/wyyZKVEmXWCdcsp/e185WUNl6AfYZeEKYaUPPvHXRDqO5K1VH7/UamYqGJowFRuCv30aDYZawsg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-export-default-from": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.4.4.tgz",
      "integrity": "sha512-Amph7Epui1Dh/xxUxS2+K22/MUi6+6JVTvy3P58tja3B6yKTSjwwx0/d83rF7551D6PVSSoplQb8GCwqec7HRw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-object-rest-spread": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.6.2.tgz",
      "integrity": "sha512-LDBXlmADCsMZV1Y9OQwMc0MyGZ8Ta/zlD9N67BfQT8uYwkRswiu2hU6nJKrjrt/58aH/vqfQlR/9yId/7A2gWw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.2.0.tgz",
      "integrity": "sha512-mgYj3jCcxug6KUcX4OBoOJz3CMrwRfQELPQ5560F70YQUBZB7uac9fqaWamKR1iWUzGiK2t0ygzjTScZnVz75g==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-optional-chaining": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.6.0.tgz",
      "integrity": "sha512-kj4gkZ6qUggkprRq3Uh5KP8XnE1MdIO0J7MhdDX8+rAbB6dJ2UrensGIS+0NPZAaaJ1Vr0PN6oLUgXMU1uMcSg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-optional-chaining": "^7.2.0"
      }
    },
    "@babel/plugin-syntax-class-properties": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.2.0.tgz",
      "integrity": "sha512-UxYaGXYQ7rrKJS/PxIKRkv3exi05oH7rokBAsmCSsCxz1sVPZ7Fu6FzKoGgUvmY+0YgSkYHgUoCh5R5bCNBQlw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-dynamic-import": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.2.0.tgz",
      "integrity": "sha512-mVxuJ0YroI/h/tbFTPGZR8cv6ai+STMKNBq0f8hFxsxWjl94qqhsb+wXbpNMDPU3cfR1TIsVFzU3nXyZMqyK4w==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-export-default-from": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-default-from/-/plugin-syntax-export-default-from-7.2.0.tgz",
      "integrity": "sha512-c7nqUnNST97BWPtoe+Ssi+fJukc9P9/JMZ71IOMNQWza2E+Psrd46N6AEvtw6pqK+gt7ChjXyrw4SPDO79f3Lw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-flow": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.2.0.tgz",
      "integrity": "sha512-r6YMuZDWLtLlu0kqIim5o/3TNRAlWb073HwT3e2nKf9I8IIvOggPrnILYPsrrKilmn/mYEMCf/Z07w3yQJF6dg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-jsx": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.2.0.tgz",
      "integrity": "sha512-VyN4QANJkRW6lDBmENzRszvZf3/4AXaj9YR7GwrWeeN9tEBPuXbmDYVU9bYBN0D70zCWVwUy0HWq2553VCb6Hw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.2.0.tgz",
      "integrity": "sha512-lRCEaKE+LTxDQtgbYajI04ddt6WW0WJq57xqkAZ+s11h4YgfRHhVA/Y2VhfPzzFD4qeLHWg32DMp9HooY4Kqlg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-object-rest-spread": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.2.0.tgz",
      "integrity": "sha512-t0JKGgqk2We+9may3t0xDdmneaXmyxq0xieYcKHxIsrJO64n1OiMWNUtc5gQK1PA0NpdCRrtZp4z+IUaKugrSA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.2.0.tgz",
      "integrity": "sha512-bDe4xKNhb0LI7IvZHiA13kff0KEfaGX/Hv4lMA9+7TEc63hMNvfKo6ZFpXhKuEp+II/q35Gc4NoMeDZyaUbj9w==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-optional-chaining": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.2.0.tgz",
      "integrity": "sha512-HtGCtvp5Uq/jH/WNUPkK6b7rufnCPLLlDAFN7cmACoIjaOOiXxUt3SswU5loHqrhtqTsa/WoLQ1OQ1AGuZqaWA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-typescript": {
      "version": "7.3.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.3.3.tgz",
      "integrity": "sha512-dGwbSMA1YhVS8+31CnPR7LB4pcbrzcV99wQzby4uAfrkZPYZlQ7ImwdpzLqi6Z6IL02b8IAL379CaMwo0x5Lag==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-arrow-functions": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.2.0.tgz",
      "integrity": "sha512-ER77Cax1+8/8jCB9fo4Ud161OZzWN5qawi4GusDuRLcDbDG+bIGYY20zb2dfAFdTRGzrfq2xZPvF0R64EHnimg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-async-to-generator": {
      "version": "7.5.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.5.0.tgz",
      "integrity": "sha512-mqvkzwIGkq0bEF1zLRRiTdjfomZJDV33AH3oQzHVGkI2VzEmXLpKKOBvEVaFZBJdN0XTyH38s9j/Kiqr68dggg==",
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-remap-async-to-generator": "^7.1.0"
      }
    },
    "@babel/plugin-transform-block-scoped-functions": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.2.0.tgz",
      "integrity": "sha512-ntQPR6q1/NKuphly49+QiQiTN0O63uOwjdD6dhIjSWBI5xlrbUFh720TIpzBhpnrLfv2tNH/BXvLIab1+BAI0w==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-block-scoping": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.6.2.tgz",
      "integrity": "sha512-zZT8ivau9LOQQaOGC7bQLQOT4XPkPXgN2ERfUgk1X8ql+mVkLc4E8eKk+FO3o0154kxzqenWCorfmEXpEZcrSQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "lodash": "^4.17.13"
      }
    },
    "@babel/plugin-transform-classes": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.5.5.tgz",
      "integrity": "sha512-U2htCNK/6e9K7jGyJ++1p5XRU+LJjrwtoiVn9SzRlDT2KubcZ11OOwy3s24TjHxPgxNwonCYP7U2K51uVYCMDg==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.0.0",
        "@babel/helper-define-map": "^7.5.5",
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-optimise-call-expression": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.5.5",
        "@babel/helper-split-export-declaration": "^7.4.4",
        "globals": "^11.1.0"
      }
    },
    "@babel/plugin-transform-computed-properties": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.2.0.tgz",
      "integrity": "sha512-kP/drqTxY6Xt3NNpKiMomfgkNn4o7+vKxK2DDKcBG9sHj51vHqMBGy8wbDS/J4lMxnqs153/T3+DmCEAkC5cpA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-destructuring": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.6.0.tgz",
      "integrity": "sha512-2bGIS5P1v4+sWTCnKNDZDxbGvEqi0ijeqM/YqHtVGrvG2y0ySgnEEhXErvE9dA0bnIzY9bIzdFK0jFA46ASIIQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-exponentiation-operator": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.2.0.tgz",
      "integrity": "sha512-umh4hR6N7mu4Elq9GG8TOu9M0bakvlsREEC+ialrQN6ABS4oDQ69qJv1VtR3uxlKMCQMCvzk7vr17RHKcjx68A==",
      "requires": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.1.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-flow-strip-types": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.4.4.tgz",
      "integrity": "sha512-WyVedfeEIILYEaWGAUWzVNyqG4sfsNooMhXWsu/YzOvVGcsnPb5PguysjJqI3t3qiaYj0BR8T2f5njdjTGe44Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-flow": "^7.2.0"
      }
    },
    "@babel/plugin-transform-for-of": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.4.4.tgz",
      "integrity": "sha512-9T/5Dlr14Z9TIEXLXkt8T1DU7F24cbhwhMNUziN3hB1AXoZcdzPcTiKGRn/6iOymDqtTKWnr/BtRKN9JwbKtdQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-function-name": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.4.4.tgz",
      "integrity": "sha512-iU9pv7U+2jC9ANQkKeNF6DrPy4GBa4NWQtl6dHB4Pb3izX2JOEvDTFarlNsBj/63ZEzNNIAMs3Qw4fNCcSOXJA==",
      "requires": {
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-literals": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.2.0.tgz",
      "integrity": "sha512-2ThDhm4lI4oV7fVQ6pNNK+sx+c/GM5/SaML0w/r4ZB7sAneD/piDJtwdKlNckXeyGK7wlwg2E2w33C/Hh+VFCg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-member-expression-literals": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.2.0.tgz",
      "integrity": "sha512-HiU3zKkSU6scTidmnFJ0bMX8hz5ixC93b4MHMiYebmk2lUVNGOboPsqQvx5LzooihijUoLR/v7Nc1rbBtnc7FA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-modules-commonjs": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.6.0.tgz",
      "integrity": "sha512-Ma93Ix95PNSEngqomy5LSBMAQvYKVe3dy+JlVJSHEXZR5ASL9lQBedMiCyVtmTLraIDVRE3ZjTZvmXXD2Ozw3g==",
      "requires": {
        "@babel/helper-module-transforms": "^7.4.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-simple-access": "^7.1.0",
        "babel-plugin-dynamic-import-node": "^2.3.0"
      }
    },
    "@babel/plugin-transform-object-assign": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-assign/-/plugin-transform-object-assign-7.2.0.tgz",
      "integrity": "sha512-nmE55cZBPFgUktbF2OuoZgPRadfxosLOpSgzEPYotKSls9J4pEPcembi8r78RU37Rph6UApCpNmsQA4QMWK9Ng==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-object-super": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.5.5.tgz",
      "integrity": "sha512-un1zJQAhSosGFBduPgN/YFNvWVpRuHKU7IHBglLoLZsGmruJPOo6pbInneflUdmq7YvSVqhpPs5zdBvLnteltQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.5.5"
      }
    },
    "@babel/plugin-transform-parameters": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.4.4.tgz",
      "integrity": "sha512-oMh5DUO1V63nZcu/ZVLQFqiihBGo4OpxJxR1otF50GMeCLiRx5nUdtokd+u9SuVJrvvuIh9OosRFPP4pIPnwmw==",
      "requires": {
        "@babel/helper-call-delegate": "^7.4.4",
        "@babel/helper-get-function-arity": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-property-literals": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.2.0.tgz",
      "integrity": "sha512-9q7Dbk4RhgcLp8ebduOpCbtjh7C0itoLYHXd9ueASKAG/is5PQtMR5VJGka9NKqGhYEGn5ITahd4h9QeBMylWQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-react-display-name": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.2.0.tgz",
      "integrity": "sha512-Htf/tPa5haZvRMiNSQSFifK12gtr/8vwfr+A9y69uF0QcU77AVu4K7MiHEkTxF7lQoHOL0F9ErqgfNEAKgXj7A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-react-jsx": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.3.0.tgz",
      "integrity": "sha512-a/+aRb7R06WcKvQLOu4/TpjKOdvVEKRLWFpKcNuHhiREPgGRB4TQJxq07+EZLS8LFVYpfq1a5lDUnuMdcCpBKg==",
      "requires": {
        "@babel/helper-builder-react-jsx": "^7.3.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.2.0"
      }
    },
    "@babel/plugin-transform-react-jsx-source": {
      "version": "7.5.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.5.0.tgz",
      "integrity": "sha512-58Q+Jsy4IDCZx7kqEZuSDdam/1oW8OdDX8f+Loo6xyxdfg1yF0GE2XNJQSTZCaMol93+FBzpWiPEwtbMloAcPg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.2.0"
      }
    },
    "@babel/plugin-transform-regenerator": {
      "version": "7.4.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.4.5.tgz",
      "integrity": "sha512-gBKRh5qAaCWntnd09S8QC7r3auLCqq5DI6O0DlfoyDjslSBVqBibrMdsqO+Uhmx3+BlOmE/Kw1HFxmGbv0N9dA==",
      "requires": {
        "regenerator-transform": "^0.14.0"
      }
    },
    "@babel/plugin-transform-runtime": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.6.2.tgz",
      "integrity": "sha512-cqULw/QB4yl73cS5Y0TZlQSjDvNkzDbu0FurTZyHlJpWE5T3PCMdnyV+xXoH1opr1ldyHODe3QAX3OMAii5NxA==",
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "resolve": "^1.8.1",
        "semver": "^5.5.1"
      }
    },
    "@babel/plugin-transform-shorthand-properties": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.2.0.tgz",
      "integrity": "sha512-QP4eUM83ha9zmYtpbnyjTLAGKQritA5XW/iG9cjtuOI8s1RuL/3V6a3DeSHfKutJQ+ayUfeZJPcnCYEQzaPQqg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-spread": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.6.2.tgz",
      "integrity": "sha512-DpSvPFryKdK1x+EDJYCy28nmAaIMdxmhot62jAXF/o99iA33Zj2Lmcp3vDmz+MUh0LNYVPvfj5iC3feb3/+PFg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-sticky-regex": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.2.0.tgz",
      "integrity": "sha512-KKYCoGaRAf+ckH8gEL3JHUaFVyNHKe3ASNsZ+AlktgHevvxGigoIttrEJb8iKN03Q7Eazlv1s6cx2B2cQ3Jabw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-regex": "^7.0.0"
      }
    },
    "@babel/plugin-transform-template-literals": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.4.4.tgz",
      "integrity": "sha512-mQrEC4TWkhLN0z8ygIvEL9ZEToPhG5K7KDW3pzGqOfIGZ28Jb0POUkeWcoz8HnHvhFy6dwAT1j8OzqN8s804+g==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-typescript": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.6.0.tgz",
      "integrity": "sha512-yzw7EopOOr6saONZ3KA3lpizKnWRTe+rfBqg4AmQbSow7ik7fqmzrfIqt053osLwLE2AaTqGinLM2tl6+M/uog==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.6.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-typescript": "^7.2.0"
      }
    },
    "@babel/plugin-transform-unicode-regex": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.6.2.tgz",
      "integrity": "sha512-orZI6cWlR3nk2YmYdb0gImrgCUwb5cBUwjf6Ks6dvNVvXERkwtJWOQaEOjPiu0Gu1Tq6Yq/hruCZZOOi9F34Dw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-regex": "^7.4.4",
        "regexpu-core": "^4.6.0"
      }
    },
    "@babel/register": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/register/-/register-7.6.2.tgz",
      "integrity": "sha512-xgZk2LRZvt6i2SAUWxc7ellk4+OYRgS3Zpsnr13nMS1Qo25w21Uu8o6vTOAqNaxiqrnv30KTYzh9YWY2k21CeQ==",
      "requires": {
        "find-cache-dir": "^2.0.0",
        "lodash": "^4.17.13",
        "mkdirp": "^0.5.1",
        "pirates": "^4.0.0",
        "source-map-support": "^0.5.9"
      }
    },
    "@babel/runtime": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.6.2.tgz",
      "integrity": "sha512-EXxN64agfUqqIGeEjI5dL5z0Sw0ZwWo1mLTi4mQowCZ42O59b7DRpZAnTC6OqdF28wMBMFKNb/4uFGrVaigSpg==",
      "requires": {
        "regenerator-runtime": "^0.13.2"
      }
    },
    "@babel/template": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.6.0.tgz",
      "integrity": "sha512-5AEH2EXD8euCk446b7edmgFdub/qfH1SN6Nii3+fyXP807QRx9Q73A2N5hNwRRslC2H9sNzaFhsPubkS4L8oNQ==",
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/parser": "^7.6.0",
        "@babel/types": "^7.6.0"
      }
    },
    "@babel/traverse": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.6.2.tgz",
      "integrity": "sha512-8fRE76xNwNttVEF2TwxJDGBLWthUkHWSldmfuBzVRmEDWOtu4XdINTgN7TDWzuLg4bbeIMLvfMFD9we5YcWkRQ==",
      "requires": {
        "@babel/code-frame": "^7.5.5",
        "@babel/generator": "^7.6.2",
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-split-export-declaration": "^7.4.4",
        "@babel/parser": "^7.6.2",
        "@babel/types": "^7.6.0",
        "debug": "^4.1.0",
        "globals": "^11.1.0",
        "lodash": "^4.17.13"
      },
      "dependencies": {
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "@babel/types": {
      "version": "7.6.1",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.6.1.tgz",
      "integrity": "sha512-X7gdiuaCmA0uRjCmRtYJNAVCc/q+5xSgsfKJHqMN4iNLILX39677fJE1O40arPMh0TTtS9ItH67yre6c7k6t0g==",
      "requires": {
        "esutils": "^2.0.2",
        "lodash": "^4.17.13",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@cnakazawa/watch": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@cnakazawa/watch/-/watch-1.0.3.tgz",
      "integrity": "sha512-r5160ogAvGyHsal38Kux7YYtodEKOj89RGb28ht1jh3SJb08VwRwAKKJL0bGb04Zd/3r9FL3BFIc3bBidYffCA==",
      "requires": {
        "exec-sh": "^0.3.2",
        "minimist": "^1.2.0"
      }
    },
    "@hapi/address": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/@hapi/address/-/address-2.1.2.tgz",
      "integrity": "sha512-O4QDrx+JoGKZc6aN64L04vqa7e41tIiLU+OvKdcYaEMP97UttL0f9GIi9/0A4WAMx0uBd6SidDIhktZhgOcN8Q=="
    },
    "@hapi/bourne": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@hapi/bourne/-/bourne-1.3.2.tgz",
      "integrity": "sha512-1dVNHT76Uu5N3eJNTYcvxee+jzX4Z9lfciqRRHCU27ihbUcYi+iSc2iml5Ke1LXe1SyJCLA0+14Jh4tXJgOppA=="
    },
    "@hapi/hoek": {
      "version": "8.2.5",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-8.2.5.tgz",
      "integrity": "sha512-rmGFzok1zR3xZKd5m3ihWdqafXFxvPHoQ/78+AG5URKbEbJiwBBfRgzbu+07W5f3+07JRshw6QqGbVmCp8ntig=="
    },
    "@hapi/joi": {
      "version": "15.1.1",
      "resolved": "https://registry.npmjs.org/@hapi/joi/-/joi-15.1.1.tgz",
      "integrity": "sha512-entf8ZMOK8sc+8YfeOlM8pCfg3b5+WZIKBfUaaJT8UsjAAPjartzxIYm3TIbjvA4u+u++KbcXD38k682nVHDAQ==",
      "requires": {
        "@hapi/address": "2.x.x",
        "@hapi/bourne": "1.x.x",
        "@hapi/hoek": "8.x.x",
        "@hapi/topo": "3.x.x"
      }
    },
    "@hapi/topo": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-3.1.4.tgz",
      "integrity": "sha512-aVWQTOI9wBD6zawmOr6f+tdEIxQC8JXfQVLTjgGe8YEStAWGn/GNNVTobKJhbWKveQj2RyYF3oYbO9SC8/eOCA==",
      "requires": {
        "@hapi/hoek": "8.x.x"
      }
    },
    "@jest/console": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
      "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
      "requires": {
        "@jest/source-map": "^24.9.0",
        "chalk": "^2.0.1",
        "slash": "^2.0.0"
      },
      "dependencies": {
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A=="
        }
      }
    },
    "@jest/core": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/core/-/core-24.9.0.tgz",
      "integrity": "sha512-Fogg3s4wlAr1VX7q+rhV9RVnUv5tD7VuWfYy1+whMiWUrvl7U3QJSJyWcDio9Lq2prqYsZaeTv2Rz24pWGkJ2A==",
      "dev": true,
      "requires": {
        "@jest/console": "^24.7.1",
        "@jest/reporters": "^24.9.0",
        "@jest/test-result": "^24.9.0",
        "@jest/transform": "^24.9.0",
        "@jest/types": "^24.9.0",
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.1",
        "exit": "^0.1.2",
        "graceful-fs": "^4.1.15",
        "jest-changed-files": "^24.9.0",
        "jest-config": "^24.9.0",
        "jest-haste-map": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-regex-util": "^24.3.0",
        "jest-resolve": "^24.9.0",
        "jest-resolve-dependencies": "^24.9.0",
        "jest-runner": "^24.9.0",
        "jest-runtime": "^24.9.0",
        "jest-snapshot": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-validate": "^24.9.0",
        "jest-watcher": "^24.9.0",
        "micromatch": "^3.1.10",
        "p-each-series": "^1.0.0",
        "realpath-native": "^1.1.0",
        "rimraf": "^2.5.4",
        "slash": "^2.0.0",
        "strip-ansi": "^5.0.0"
      },
      "dependencies": {
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
          "dev": true
        }
      }
    },
    "@jest/environment": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
      "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
      "dev": true,
      "requires": {
        "@jest/fake-timers": "^24.9.0",
        "@jest/transform": "^24.9.0",
        "@jest/types": "^24.9.0",
        "jest-mock": "^24.9.0"
      }
    },
    "@jest/fake-timers": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
      "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
      "requires": {
        "@jest/types": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-mock": "^24.9.0"
      }
    },
    "@jest/reporters": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-24.9.0.tgz",
      "integrity": "sha512-mu4X0yjaHrffOsWmVLzitKmmmWSQ3GGuefgNscUSWNiUNcEOSEQk9k3pERKEQVBb0Cnn88+UESIsZEMH3o88Gw==",
      "dev": true,
      "requires": {
        "@jest/environment": "^24.9.0",
        "@jest/test-result": "^24.9.0",
        "@jest/transform": "^24.9.0",
        "@jest/types": "^24.9.0",
        "chalk": "^2.0.1",
        "exit": "^0.1.2",
        "glob": "^7.1.2",
        "istanbul-lib-coverage": "^2.0.2",
        "istanbul-lib-instrument": "^3.0.1",
        "istanbul-lib-report": "^2.0.4",
        "istanbul-lib-source-maps": "^3.0.1",
        "istanbul-reports": "^2.2.6",
        "jest-haste-map": "^24.9.0",
        "jest-resolve": "^24.9.0",
        "jest-runtime": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-worker": "^24.6.0",
        "node-notifier": "^5.4.2",
        "slash": "^2.0.0",
        "source-map": "^0.6.0",
        "string-length": "^2.0.0"
      },
      "dependencies": {
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "@jest/source-map": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
      "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
      "requires": {
        "callsites": "^3.0.0",
        "graceful-fs": "^4.1.15",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "callsites": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
          "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "@jest/test-result": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
      "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
      "requires": {
        "@jest/console": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/istanbul-lib-coverage": "^2.0.0"
      }
    },
    "@jest/test-sequencer": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-24.9.0.tgz",
      "integrity": "sha512-6qqsU4o0kW1dvA95qfNog8v8gkRN9ph6Lz7r96IvZpHdNipP2cBcb07J1Z45mz/VIS01OHJ3pY8T5fUY38tg4A==",
      "dev": true,
      "requires": {
        "@jest/test-result": "^24.9.0",
        "jest-haste-map": "^24.9.0",
        "jest-runner": "^24.9.0",
        "jest-runtime": "^24.9.0"
      }
    },
    "@jest/transform": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
      "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
      "dev": true,
      "requires": {
        "@babel/core": "^7.1.0",
        "@jest/types": "^24.9.0",
        "babel-plugin-istanbul": "^5.1.0",
        "chalk": "^2.0.1",
        "convert-source-map": "^1.4.0",
        "fast-json-stable-stringify": "^2.0.0",
        "graceful-fs": "^4.1.15",
        "jest-haste-map": "^24.9.0",
        "jest-regex-util": "^24.9.0",
        "jest-util": "^24.9.0",
        "micromatch": "^3.1.10",
        "pirates": "^4.0.1",
        "realpath-native": "^1.1.0",
        "slash": "^2.0.0",
        "source-map": "^0.6.1",
        "write-file-atomic": "2.4.1"
      },
      "dependencies": {
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "write-file-atomic": {
          "version": "2.4.1",
          "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.1.tgz",
          "integrity": "sha512-TGHFeZEZMnv+gBFRfjAcxL5bPHrsGKtnb4qsFAws7/vlh+QfwAaySIw4AXP9ZskTTh5GWu3FLuJhsWVdiJPGvg==",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.11",
            "imurmurhash": "^0.1.4",
            "signal-exit": "^3.0.2"
          }
        }
      }
    },
    "@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "requires": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      }
    },
    "@react-native-community/cli-platform-android": {
      "version": "3.0.0-alpha.2",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-platform-android/-/cli-platform-android-3.0.0-alpha.2.tgz",
      "integrity": "sha512-9HxWvBiK29AJQjavug658rEWHXVsqdAdL7rzMK9+gOid5zFoHrb1GoIeJm3byEowNZvqoy09nVcQvrUea41kQQ==",
      "requires": {
        "@react-native-community/cli-tools": "^2.8.3",
        "chalk": "^2.4.2",
        "execa": "^1.0.0",
        "jetifier": "^1.6.2",
        "logkitty": "^0.6.0",
        "slash": "^3.0.0",
        "xmldoc": "^1.1.2"
      }
    },
    "@react-native-community/cli-platform-ios": {
      "version": "3.0.0-alpha.2",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-platform-ios/-/cli-platform-ios-3.0.0-alpha.2.tgz",
      "integrity": "sha512-37FtnrWTUP0EzQ83raplcnOUlEzRCsDrsxGsUnBso33fNPBAJ4Ei6L/BuJPJZ+sCAWFbyO1XhVED0c1QuP0cww==",
      "requires": {
        "@react-native-community/cli-tools": "^2.8.3",
        "chalk": "^2.4.2",
        "xcode": "^2.0.0"
      }
    },
    "@react-native-community/cli-tools": {
      "version": "2.8.3",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-tools/-/cli-tools-2.8.3.tgz",
      "integrity": "sha512-N5Pz+pR+GFq3JApjd0SW4jp9KC7kbKsMH65QLRh30JNsxdPvNkYox6/ZZdkvdXaI5ev3EckR7eqlcwi5gpVTYQ==",
      "requires": {
        "chalk": "^2.4.2",
        "lodash": "^4.17.5",
        "mime": "^2.4.1",
        "node-fetch": "^2.5.0"
      }
    },
    "@react-native-community/eslint-config": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/@react-native-community/eslint-config/-/eslint-config-0.0.3.tgz",
      "integrity": "sha512-YmCiqoiqgSW8YpWYWLwG4WYwVIwvkhfH97COxbin71CuCr5muZPlmhHOFwo2gIQzUvt1ewFb1shtUi1X8TAVhA==",
      "dev": true,
      "requires": {
        "babel-eslint": "10.0.1",
        "eslint-plugin-eslint-comments": "^3.1.1",
        "eslint-plugin-flowtype": "2.50.3",
        "eslint-plugin-jest": "22.4.1",
        "eslint-plugin-prettier": "2.6.2",
        "eslint-plugin-react": "7.12.4",
        "eslint-plugin-react-hooks": "^1.5.1",
        "eslint-plugin-react-native": "3.6.0",
        "prettier": "1.16.4"
      }
    },
    "@testing-library/react-native": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/@testing-library/react-native/-/react-native-4.0.12.tgz",
      "integrity": "sha512-pHwQO1c3Y9oopYlVec2ecfMoVseH0yikqMTEzdKHiTeGQ0Zp3cIE5e6fOzzyO99fhPFrDaZ9/ARWaUY+5NIeiQ==",
      "dev": true,
      "requires": {
        "pretty-format": "^24.5.0",
        "wait-for-expect": "^1.1.1"
      }
    },
    "@types/babel__core": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.3.tgz",
      "integrity": "sha512-8fBo0UR2CcwWxeX7WIIgJ7lXjasFxoYgRnFHUj+hRvKkpiBJbxhdAPTCY6/ZKM0uxANFVzt4yObSLuTiTnazDA==",
      "dev": true,
      "requires": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "@types/babel__generator": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.0.tgz",
      "integrity": "sha512-c1mZUu4up5cp9KROs/QAw0gTeHrw/x7m52LcnvMxxOZ03DmLwPV0MlGmlgzV3cnSdjhJOZsj7E7FHeioai+egw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@types/babel__template": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.0.2.tgz",
      "integrity": "sha512-/K6zCpeW7Imzgab2bLkLEbz0+1JlFSrUMdw7KoIIu+IUdu51GWaBZpd3y1VXGVXzynvGa4DaIaxNZHiON3GXUg==",
      "dev": true,
      "requires": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@types/babel__traverse": {
      "version": "7.0.7",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.0.7.tgz",
      "integrity": "sha512-CeBpmX1J8kWLcDEnI3Cl2Eo6RfbGvzUctA+CjZUhOKDFbLfcr7fc4usEqLNWetrlJd7RhAkyYe2czXop4fICpw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.3.0"
      }
    },
    "@types/istanbul-lib-coverage": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.1.tgz",
      "integrity": "sha512-hRJD2ahnnpLgsj6KWMYSrmXkM3rm2Dl1qkx6IOFD5FnuNPXJIG5L0dhgKXCYTRMGzU4n0wImQ/xfmRc4POUFlg=="
    },
    "@types/istanbul-lib-report": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-1.1.1.tgz",
      "integrity": "sha512-3BUTyMzbZa2DtDI2BkERNC6jJw2Mr2Y0oGI7mRxYNBPxppbtEK1F66u3bKwU2g+wxwWI7PAoRpJnOY1grJqzHg==",
      "requires": {
        "@types/istanbul-lib-coverage": "*"
      }
    },
    "@types/istanbul-reports": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.1.tgz",
      "integrity": "sha512-UpYjBi8xefVChsCoBpKShdxTllC9pwISirfoZsUa2AAdQg/Jd2KQGtSbw+ya7GPo7x/wAPlH6JBhKhAsXUEZNA==",
      "requires": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "@types/stack-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-1.0.1.tgz",
      "integrity": "sha512-l42BggppR6zLmpfU6fq9HEa2oGPEI8yrSPL3GITjfRInppYFahObbIQOQK3UGxEnyQpltZLaPe75046NOZQikw=="
    },
    "@types/yargs": {
      "version": "13.0.3",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.3.tgz",
      "integrity": "sha512-K8/LfZq2duW33XW/tFwEAfnZlqIfVsoyRB3kfXdPXYhl0nfM8mmh7GS0jg7WrX2Dgq/0Ha/pR1PaR+BvmWwjiQ==",
      "requires": {
        "@types/yargs-parser": "*"
      }
    },
    "@types/yargs-parser": {
      "version": "13.1.0",
      "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-13.1.0.tgz",
      "integrity": "sha512-gCubfBUZ6KxzoibJ+SCUc/57Ms1jz5NjHe4+dI2krNmU5zCPAphyLJYyTOg06ueIyfj+SaCUqmzun7ImlxDcKg=="
    },
    "abab": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.2.tgz",
      "integrity": "sha512-2scffjvioEmNz0OyDSLGWDfKCVwaKc6l9Pm9kOIREU13ClXZvHpg/nRL5xyjSSSLhOnXqft2HpsAzNEEA8cFFg==",
      "dev": true
    },
    "abort-controller": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
      "integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
      "requires": {
        "event-target-shim": "^5.0.0"
      }
    },
    "absolute-path": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/absolute-path/-/absolute-path-0.0.0.tgz",
      "integrity": "sha1-p4di+9rftSl76ZsV01p4Wy8JW/c="
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "acorn": {
      "version": "5.7.3",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.3.tgz",
      "integrity": "sha512-T/zvzYRfbVojPWahDsE5evJdHb3oJoQfFbsrKM7w5Zcs++Tr257tia3BmMP8XYVjp1S9RZXQMh7gao96BlqZOw==",
      "dev": true
    },
    "acorn-globals": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
      "dev": true,
      "requires": {
        "acorn": "^6.0.1",
        "acorn-walk": "^6.0.1"
      },
      "dependencies": {
        "acorn": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.3.0.tgz",
          "integrity": "sha512-/czfa8BwS88b9gWQVhc8eknunSA2DoJpJyTQkhheIf5E48u1N0R4q/YxxsAeqRrmK9TQ/uYfgLDfZo91UlANIA==",
          "dev": true
        }
      }
    },
    "acorn-walk": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
      "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
      "dev": true
    },
    "ajv": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.2.tgz",
      "integrity": "sha512-TXtUUEYHuaTEbLZWIKUr5pmBuhDLy+8KYtPYdcV8qC+pOZL+NKqYwvWSRrVXHn+ZmRRAu8vJTAznH7Oag6RVRw==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^2.0.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "ansi-colors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-1.1.0.tgz",
      "integrity": "sha512-SFKX67auSNoVR38N3L+nvsPjOE0bybKTYbkf5tRvushrAPQ9V75huw0ZxBkKVeRU9kqH3d6HA4xTckbwZ4ixmA==",
      "requires": {
        "ansi-wrap": "^0.1.0"
      }
    },
    "ansi-cyan": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-cyan/-/ansi-cyan-0.1.1.tgz",
      "integrity": "sha1-U4rlKK+JgvKK4w2G8vF0VtJgmHM=",
      "requires": {
        "ansi-wrap": "0.1.0"
      }
    },
    "ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
    },
    "ansi-fragments": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/ansi-fragments/-/ansi-fragments-0.2.1.tgz",
      "integrity": "sha512-DykbNHxuXQwUDRv5ibc2b0x7uw7wmwOGLBUd5RmaQ5z8Lhx19vwvKV+FAsM5rEA6dEcHxX+/Ad5s9eF2k2bB+w==",
      "requires": {
        "colorette": "^1.0.7",
        "slice-ansi": "^2.0.0",
        "strip-ansi": "^5.0.0"
      }
    },
    "ansi-gray": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-gray/-/ansi-gray-0.1.1.tgz",
      "integrity": "sha1-KWLPVOyXksSFEKPetSRDaGHvclE=",
      "requires": {
        "ansi-wrap": "0.1.0"
      }
    },
    "ansi-red": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-red/-/ansi-red-0.1.1.tgz",
      "integrity": "sha1-jGOPnRCAgAo1PJwoyKgcpHBdlGw=",
      "requires": {
        "ansi-wrap": "0.1.0"
      }
    },
    "ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "requires": {
        "color-convert": "^1.9.0"
      }
    },
    "ansi-wrap": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/ansi-wrap/-/ansi-wrap-0.1.0.tgz",
      "integrity": "sha1-qCJQ3bABXponyoLoLqYDu/pF768="
    },
    "anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "requires": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      }
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg=="
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="
    },
    "array-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
      "dev": true
    },
    "array-filter": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/array-filter/-/array-filter-0.0.1.tgz",
      "integrity": "sha1-fajPLiZijtcygDWB/SH2fKzS7uw="
    },
    "array-includes": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.0.3.tgz",
      "integrity": "sha1-GEtI9i2S10UrsxsyMWXH+L0CJm0=",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.2",
        "es-abstract": "^1.7.0"
      }
    },
    "array-map": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-map/-/array-map-0.0.0.tgz",
      "integrity": "sha1-iKK6tz0c97zVwbEYoAP2b2ZfpmI="
    },
    "array-reduce": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-reduce/-/array-reduce-0.0.0.tgz",
      "integrity": "sha1-FziZ0//Rx9k4PkR5Ul2+J4yrXys="
    },
    "array-slice": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/array-slice/-/array-slice-0.2.3.tgz",
      "integrity": "sha1-3Tz7gO15c6dRF82sabC5nshhhvU="
    },
    "array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg="
    },
    "art": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/art/-/art-0.10.3.tgz",
      "integrity": "sha512-HXwbdofRTiJT6qZX/FnchtldzJjS3vkLJxQilc3Xj+ma2MXjY4UAyQ0ls1XZYVnDvVIBiFZbC6QsvtW86TD6tQ=="
    },
    "asap": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
      "integrity": "sha1-5QNHYR1+aQlDIIu9r+vLwvuGbUY="
    },
    "asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "requires": {
        "safer-buffer": "~2.1.0"
      }
    },
    "assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c="
    },
    "astral-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg=="
    },
    "async": {
      "version": "2.6.3",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
      "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
      "requires": {
        "lodash": "^4.17.14"
      }
    },
    "async-limiter": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ=="
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="
    },
    "aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true
    },
    "aws4": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.8.0.tgz",
      "integrity": "sha512-ReZxvNHIOv88FlT7rxcXIIC0fPt4KZqZbOlivyWtXLt8ESx84zd3kMC6iK5jVeS2qt+g7ftS7ye4fi06X5rtRQ==",
      "dev": true
    },
    "babel-eslint": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/babel-eslint/-/babel-eslint-10.0.1.tgz",
      "integrity": "sha512-z7OT1iNV+TjOwHNLLyJk+HN+YVWX+CLE6fPD2SymJZOZQBs+QIexFjhm4keGTm8MW9xr4EC9Q0PbaLB24V5GoQ==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/parser": "^7.0.0",
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "eslint-scope": "3.7.1",
        "eslint-visitor-keys": "^1.0.0"
      }
    },
    "babel-jest": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-24.9.0.tgz",
      "integrity": "sha512-ntuddfyiN+EhMw58PTNL1ph4C9rECiQXjI4nMMBKBaNjXvqLdkXpPRcMSr4iyBrJg/+wz9brFUD6RhOAT6r4Iw==",
      "dev": true,
      "requires": {
        "@jest/transform": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/babel__core": "^7.1.0",
        "babel-plugin-istanbul": "^5.1.0",
        "babel-preset-jest": "^24.9.0",
        "chalk": "^2.4.2",
        "slash": "^2.0.0"
      },
      "dependencies": {
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
          "dev": true
        }
      }
    },
    "babel-plugin-dynamic-import-node": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.0.tgz",
      "integrity": "sha512-o6qFkpeQEBxcqt0XYlWzAVxNCSCZdUgcR8IRlhD/8DylxjjO4foPcvTW0GGKa/cVt3rvxZ7o5ippJ+/0nvLhlQ==",
      "requires": {
        "object.assign": "^4.1.0"
      }
    },
    "babel-plugin-istanbul": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-5.2.0.tgz",
      "integrity": "sha512-5LphC0USA8t4i1zCtjbbNb6jJj/9+X6P37Qfirc/70EQ34xKlMW+a1RHGwxGI+SwWpNwZ27HqvzAobeqaXwiZw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "find-up": "^3.0.0",
        "istanbul-lib-instrument": "^3.3.0",
        "test-exclude": "^5.2.3"
      }
    },
    "babel-plugin-jest-hoist": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-24.9.0.tgz",
      "integrity": "sha512-2EMA2P8Vp7lG0RAzr4HXqtYwacfMErOuv1U3wrvxHX6rD1sV6xS3WXG3r8TRQ2r6w8OhvSdWt+z41hQNwNm3Xw==",
      "dev": true,
      "requires": {
        "@types/babel__traverse": "^7.0.6"
      }
    },
    "babel-plugin-syntax-trailing-function-commas": {
      "version": "7.0.0-beta.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-trailing-function-commas/-/babel-plugin-syntax-trailing-function-commas-7.0.0-beta.0.tgz",
      "integrity": "sha512-Xj9XuRuz3nTSbaTXWv3itLOcxyF4oPD8douBBmj7U9BBC6nEBYfyOJYQMf/8PJAFotC62UY5dFfIGEPr7WswzQ=="
    },
    "babel-preset-fbjs": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/babel-preset-fbjs/-/babel-preset-fbjs-3.2.0.tgz",
      "integrity": "sha512-5Jo+JeWiVz2wHUUyAlvb/sSYnXNig9r+HqGAOSfh5Fzxp7SnAaR/tEGRJ1ZX7C77kfk82658w6R5Z+uPATTD9g==",
      "requires": {
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
        "@babel/plugin-syntax-class-properties": "^7.0.0",
        "@babel/plugin-syntax-flow": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.0.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
        "@babel/plugin-transform-arrow-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoped-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoping": "^7.0.0",
        "@babel/plugin-transform-classes": "^7.0.0",
        "@babel/plugin-transform-computed-properties": "^7.0.0",
        "@babel/plugin-transform-destructuring": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-for-of": "^7.0.0",
        "@babel/plugin-transform-function-name": "^7.0.0",
        "@babel/plugin-transform-literals": "^7.0.0",
        "@babel/plugin-transform-member-expression-literals": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/plugin-transform-object-super": "^7.0.0",
        "@babel/plugin-transform-parameters": "^7.0.0",
        "@babel/plugin-transform-property-literals": "^7.0.0",
        "@babel/plugin-transform-react-display-name": "^7.0.0",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/plugin-transform-shorthand-properties": "^7.0.0",
        "@babel/plugin-transform-spread": "^7.0.0",
        "@babel/plugin-transform-template-literals": "^7.0.0",
        "babel-plugin-syntax-trailing-function-commas": "^7.0.0-beta.0"
      }
    },
    "babel-preset-jest": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-24.9.0.tgz",
      "integrity": "sha512-izTUuhE4TMfTRPF92fFwD2QfdXaZW08qvWTFCI51V8rW5x00UuPgc3ajRoWofXOuxjfcOM5zzSYsQS3H8KGCAg==",
      "dev": true,
      "requires": {
        "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
        "babel-plugin-jest-hoist": "^24.9.0"
      }
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "base64-js": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.1.tgz",
      "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g=="
    },
    "basic-auth": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-2.0.1.tgz",
      "integrity": "sha512-NF+epuEdnUYVlGuhaxbbq+dvJttwLnGY+YixlXlME5KpQ5W3CnXA5cVTneY3SPbPDRkcjMbifrwmFYcClgOZeg==",
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "requires": {
        "tweetnacl": "^0.14.3"
      }
    },
    "big-integer": {
      "version": "1.6.46",
      "resolved": "https://registry.npmjs.org/big-integer/-/big-integer-1.6.46.tgz",
      "integrity": "sha512-Vj2TNtZ8Y0XaL6HCkzJiEqfykjtv/9wVCWIutMe+QVIXLPe2tCLEzULtYvcX9WRtmNIj3Jqi5tNjIsR0N4QOsg=="
    },
    "bplist-creator": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/bplist-creator/-/bplist-creator-0.0.7.tgz",
      "integrity": "sha1-N98VNgkoJLh8QvlXsBNEEXNyrkU=",
      "requires": {
        "stream-buffers": "~2.2.0"
      }
    },
    "bplist-parser": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/bplist-parser/-/bplist-parser-0.1.1.tgz",
      "integrity": "sha1-1g1dzCDLptx+HymbNdPh+V2vuuY=",
      "requires": {
        "big-integer": "^1.6.7"
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "requires": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "browser-process-hrtime": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-0.1.3.tgz",
      "integrity": "sha512-bRFnI4NnjO6cnyLmOV/7PVoDEMJChlcfN0z4s1YMBY989/SvlfMI1lgCnkFUs53e9gQF+w7qu7XdllSTiSl8Aw==",
      "dev": true
    },
    "browser-resolve": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/browser-resolve/-/browser-resolve-1.11.3.tgz",
      "integrity": "sha512-exDi1BYWB/6raKHmDTCicQfTkqwN5fioMFV4j8BsfMU4R2DK/QfZfK7kOVkmWCNANf0snkBzqGqAJBao9gZMdQ==",
      "dev": true,
      "requires": {
        "resolve": "1.1.7"
      },
      "dependencies": {
        "resolve": {
          "version": "1.1.7",
          "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.1.7.tgz",
          "integrity": "sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs=",
          "dev": true
        }
      }
    },
    "bser": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.0.tgz",
      "integrity": "sha512-8zsjWrQkkBoLK6uxASk1nJ2SKv97ltiGDo6A3wA0/yRPz+CwmEyDo0hUrhIuukG2JHpAl3bvFIixw2/3Hi0DOg==",
      "requires": {
        "node-int64": "^0.4.0"
      }
    },
    "buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI="
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
    },
    "bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      }
    },
    "caller-callsite": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
      "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
      "requires": {
        "callsites": "^2.0.0"
      }
    },
    "caller-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
      "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
      "requires": {
        "caller-callsite": "^2.0.0"
      }
    },
    "callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA="
    },
    "camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
    },
    "capture-exit": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-2.0.0.tgz",
      "integrity": "sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==",
      "requires": {
        "rsvp": "^4.8.4"
      }
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "requires": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      }
    },
    "chardet": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.4.2.tgz",
      "integrity": "sha1-tUc7M9yXxCTl2Y3IfVXU2KKci/I="
    },
    "ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "requires": {
        "restore-cursor": "^2.0.0"
      }
    },
    "cli-spinners": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.2.0.tgz",
      "integrity": "sha512-tgU3fKwzYjiLEQgPMD9Jt+JjHVL9kW93FiIMX/l7rivvOD4/LL0Mf7gda3+4U2KJBloybwgj5KEoQgGRioMiKQ=="
    },
    "cli-width": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz",
      "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk="
    },
    "cliui": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
      "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
      "requires": {
        "string-width": "^2.1.1",
        "strip-ansi": "^4.0.0",
        "wrap-ansi": "^2.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4="
    },
    "co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
      "dev": true
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
    },
    "color-support": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg=="
    },
    "colorette": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.1.0.tgz",
      "integrity": "sha512-6S062WDQUXi6hOfkO/sBPVwE5ASXY4G2+b4atvhJfSsuUUhIaUKlkjLe9692Ipyt5/a+IPF5aVTu3V5gvXq5cg=="
    },
    "combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "commander": {
      "version": "2.20.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.1.tgz",
      "integrity": "sha512-cCuLsMhJeWQ/ZpsFTbE765kvVfoeSddc4nU3up4fV+fDBcfUXnbITJ+JzhkdjzOqhURjZgujxaioam4RM9yGUg=="
    },
    "commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs="
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
    },
    "compressible": {
      "version": "2.0.17",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.17.tgz",
      "integrity": "sha512-BGHeLCK1GV7j1bSmQQAi26X+GgWcTjLr/0tzSvMCl3LH1w1IJ4PFSPoV5316b30cneTziC+B1a+3OjoSUcQYmw==",
      "requires": {
        "mime-db": ">= 1.40.0 < 2"
      }
    },
    "compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "requires": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      }
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "connect": {
      "version": "3.7.0",
      "resolved": "https://registry.npmjs.org/connect/-/connect-3.7.0.tgz",
      "integrity": "sha512-ZqRXc+tZukToSNmh5C2iWMSoV3X1YUcPbqEM4DkEG5tNQXrQUZCNVGGv3IuicnkMtPfGf3Xtp8WCXs295iQ1pQ==",
      "requires": {
        "debug": "2.6.9",
        "finalhandler": "1.1.2",
        "parseurl": "~1.3.3",
        "utils-merge": "1.0.1"
      }
    },
    "convert-source-map": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.6.0.tgz",
      "integrity": "sha512-eFu7XigvxdZ1ETfbgPBohgyQ/Z++C0eEhTor0qRwBw9unw+L0/6V8wkSuGgzdThkiS5lSpdptOQPD8Ak40a+7A==",
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40="
    },
    "core-js": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.9.tgz",
      "integrity": "sha512-HOpZf6eXmnl7la+cUdMnLvUxKNqLUzJvgIziQ0DiF3JwSImNphIqdGqzj6hIKyX04MmV0poclQ7+wjWvxQyR2A=="
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "cosmiconfig": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
      "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
      "requires": {
        "import-fresh": "^2.0.0",
        "is-directory": "^0.3.1",
        "js-yaml": "^3.13.1",
        "parse-json": "^4.0.0"
      }
    },
    "create-react-class": {
      "version": "15.6.3",
      "resolved": "https://registry.npmjs.org/create-react-class/-/create-react-class-15.6.3.tgz",
      "integrity": "sha512-M+/3Q6E6DLO6Yx3OwrWjwHBnvfXXYA7W+dFjt/ZDBemHO1DDZhsalX/NUtnTYclN6GfnBDRh4qRHjcDHmlJBJg==",
      "requires": {
        "fbjs": "^0.8.9",
        "loose-envify": "^1.3.1",
        "object-assign": "^4.1.1"
      },
      "dependencies": {
        "core-js": {
          "version": "1.2.7",
          "resolved": "https://registry.npmjs.org/core-js/-/core-js-1.2.7.tgz",
          "integrity": "sha1-ZSKUwUZR2yj6k70tX/KYOk8IxjY="
        },
        "fbjs": {
          "version": "0.8.17",
          "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-0.8.17.tgz",
          "integrity": "sha1-xNWY6taUkRJlPWWIsBpc3Nn5D90=",
          "requires": {
            "core-js": "^1.0.0",
            "isomorphic-fetch": "^2.1.1",
            "loose-envify": "^1.0.0",
            "object-assign": "^4.1.0",
            "promise": "^7.1.1",
            "setimmediate": "^1.0.5",
            "ua-parser-js": "^0.7.18"
          }
        }
      }
    },
    "cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "requires": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      }
    },
    "cssom": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
      "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
      "dev": true
    },
    "cssstyle": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
      "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
      "dev": true,
      "requires": {
        "cssom": "0.3.x"
      }
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "data-urls": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
      "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "whatwg-mimetype": "^2.2.0",
        "whatwg-url": "^7.0.0"
      },
      "dependencies": {
        "whatwg-url": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.0.0.tgz",
          "integrity": "sha512-37GeVSIJ3kn1JgKyjiYNmSLP1yzbpb29jdmwBSgkD9h40/hyrR/OifpVUndji3tmwGgD8qpw7iQu3RSbCrBpsQ==",
          "dev": true,
          "requires": {
            "lodash.sortby": "^4.7.0",
            "tr46": "^1.0.1",
            "webidl-conversions": "^4.0.2"
          }
        }
      }
    },
    "dayjs": {
      "version": "1.8.16",
      "resolved": "https://registry.npmjs.org/dayjs/-/dayjs-1.8.16.tgz",
      "integrity": "sha512-XPmqzWz/EJiaRHjBqSJ2s6hE/BUoCIHKgdS2QPtTQtKcS9E4/Qn0WomoH1lXanWCzri+g7zPcuNV4aTZ8PMORQ=="
    },
    "debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "deepmerge": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-3.3.0.tgz",
      "integrity": "sha512-GRQOafGHwMHpjPx9iCvTgpu9NojZ49q794EEL94JVEw6VaeA8XTUyBKvAkOOjBX9oJNiV6G3P+T+tihFjo2TqA=="
    },
    "defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "requires": {
        "clone": "^1.0.2"
      }
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true
    },
    "denodeify": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/denodeify/-/denodeify-1.2.1.tgz",
      "integrity": "sha1-OjYof1A05pnnV3kBBSwubJQlFjE="
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "detect-newline": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-2.1.0.tgz",
      "integrity": "sha1-9B8cEL5LAOh7XxPaaAdZ8sW/0+I=",
      "dev": true
    },
    "diff-sequences": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-24.9.0.tgz",
      "integrity": "sha512-Dj6Wk3tWyTE+Fo1rW8v0Xhwk80um6yFYKbuAxc9c3EZxIHFDYwbi34Uk42u1CdnIiVorvt4RmlSDjIPyzGC2ew==",
      "dev": true
    },
    "doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "requires": {
        "esutils": "^2.0.2"
      }
    },
    "dom-walk": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/dom-walk/-/dom-walk-0.1.1.tgz",
      "integrity": "sha1-ZyIm3HTI95mtNTB9+TaroRrNYBg=",
      "dev": true
    },
    "domexception": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
      "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
      "dev": true,
      "requires": {
        "webidl-conversions": "^4.0.2"
      }
    },
    "ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "requires": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
      "dev": true
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "encoding": {
      "version": "0.1.12",
      "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.12.tgz",
      "integrity": "sha1-U4tm8+5izRq1HsMjgp0flIDHS+s=",
      "requires": {
        "iconv-lite": "~0.4.13"
      }
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "requires": {
        "once": "^1.4.0"
      }
    },
    "envinfo": {
      "version": "7.4.0",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.4.0.tgz",
      "integrity": "sha512-FdDfnWnCVjxTTpWE3d6Jgh5JDIA3Cw7LCgpM/pI7kK1ORkjaqI2r6NqQ+ln2j0dfpgxY00AWieSvtkiZQKIItA=="
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "errorhandler": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/errorhandler/-/errorhandler-1.5.1.tgz",
      "integrity": "sha512-rcOwbfvP1WTViVoUjcfZicVzjhjTuhSMntHh6mW3IrEiyE6mJyXvsToJUJGlGlw/2xU9P5whlWNGlIDVeCiT4A==",
      "requires": {
        "accepts": "~1.3.7",
        "escape-html": "~1.0.3"
      }
    },
    "es-abstract": {
      "version": "1.14.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.14.2.tgz",
      "integrity": "sha512-DgoQmbpFNOofkjJtKwr87Ma5EW4Dc8fWhD0R+ndq7Oc456ivUfGOOP6oAZTTKl5/CcNMP+EN+e3/iUzgE0veZg==",
      "dev": true,
      "requires": {
        "es-to-primitive": "^1.2.0",
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.0",
        "is-callable": "^1.1.4",
        "is-regex": "^1.0.4",
        "object-inspect": "^1.6.0",
        "object-keys": "^1.1.1",
        "string.prototype.trimleft": "^2.0.0",
        "string.prototype.trimright": "^2.0.0"
      }
    },
    "es-to-primitive": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.0.tgz",
      "integrity": "sha512-qZryBOJjV//LaxLTV6UC//WewneB3LcXOL9NP++ozKVXsIIIpm/2c13UDiD9Jp2eThsecw9m3jPqDwTyobcdbg==",
      "dev": true,
      "requires": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      }
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
    },
    "escodegen": {
      "version": "1.12.0",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.12.0.tgz",
      "integrity": "sha512-TuA+EhsanGcme5T3R0L80u4t8CpbXQjegRmf7+FPTJrtCTErXFeelblRgHQa1FofEzqYYJmJ/OqjTwREp9qgmg==",
      "dev": true,
      "requires": {
        "esprima": "^3.1.3",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "esprima": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/esprima/-/esprima-3.1.3.tgz",
          "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true,
          "optional": true
        }
      }
    },
    "eslint-plugin-eslint-comments": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-eslint-comments/-/eslint-plugin-eslint-comments-3.1.2.tgz",
      "integrity": "sha512-QexaqrNeteFfRTad96W+Vi4Zj1KFbkHHNMMaHZEYcovKav6gdomyGzaxSDSL3GoIyUOo078wRAdYlu1caiauIQ==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.5",
        "ignore": "^5.0.5"
      }
    },
    "eslint-plugin-flowtype": {
      "version": "2.50.3",
      "resolved": "https://registry.npmjs.org/eslint-plugin-flowtype/-/eslint-plugin-flowtype-2.50.3.tgz",
      "integrity": "sha512-X+AoKVOr7Re0ko/yEXyM5SSZ0tazc6ffdIOocp2fFUlWoDt7DV0Bz99mngOkAFLOAWjqRA5jPwqUCbrx13XoxQ==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.10"
      }
    },
    "eslint-plugin-jest": {
      "version": "22.4.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jest/-/eslint-plugin-jest-22.4.1.tgz",
      "integrity": "sha512-gcLfn6P2PrFAVx3AobaOzlIEevpAEf9chTpFZz7bYfc7pz8XRv7vuKTIE4hxPKZSha6XWKKplDQ0x9Pq8xX2mg==",
      "dev": true
    },
    "eslint-plugin-prettier": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-prettier/-/eslint-plugin-prettier-2.6.2.tgz",
      "integrity": "sha512-tGek5clmW5swrAx1mdPYM8oThrBE83ePh7LeseZHBWfHVGrHPhKn7Y5zgRMbU/9D5Td9K4CEmUPjGxA7iw98Og==",
      "dev": true,
      "requires": {
        "fast-diff": "^1.1.1",
        "jest-docblock": "^21.0.0"
      }
    },
    "eslint-plugin-react": {
      "version": "7.12.4",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.12.4.tgz",
      "integrity": "sha512-1puHJkXJY+oS1t467MjbqjvX53uQ05HXwjqDgdbGBqf5j9eeydI54G3KwiJmWciQ0HTBacIKw2jgwSBSH3yfgQ==",
      "dev": true,
      "requires": {
        "array-includes": "^3.0.3",
        "doctrine": "^2.1.0",
        "has": "^1.0.3",
        "jsx-ast-utils": "^2.0.1",
        "object.fromentries": "^2.0.0",
        "prop-types": "^15.6.2",
        "resolve": "^1.9.0"
      }
    },
    "eslint-plugin-react-hooks": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-1.7.0.tgz",
      "integrity": "sha512-iXTCFcOmlWvw4+TOE8CLWj6yX1GwzT0Y6cUfHHZqWnSk144VmVIRcVGtUAzrLES7C798lmvnt02C7rxaOX1HNA==",
      "dev": true
    },
    "eslint-plugin-react-native": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-native/-/eslint-plugin-react-native-3.6.0.tgz",
      "integrity": "sha512-BEQcHZ06hZSBYWFVuNEq0xuui5VEsWpHDsZGBtfadHfCRqRMUrkYPgdDb3bpc60qShHE83kqIv59uKdinEg91Q==",
      "dev": true,
      "requires": {
        "eslint-plugin-react-native-globals": "^0.1.1"
      }
    },
    "eslint-plugin-react-native-globals": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-native-globals/-/eslint-plugin-react-native-globals-0.1.2.tgz",
      "integrity": "sha512-9aEPf1JEpiTjcFAmmyw8eiIXmcNZOqaZyHO77wgm0/dWfT/oxC1SrIq8ET38pMxHYrcB6Uew+TzUVsBeczF88g==",
      "dev": true
    },
    "eslint-scope": {
      "version": "3.7.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-3.7.1.tgz",
      "integrity": "sha1-PWPD7f2gLgbgGkUq2IyqzHzctug=",
      "dev": true,
      "requires": {
        "esrecurse": "^4.1.0",
        "estraverse": "^4.1.1"
      }
    },
    "eslint-visitor-keys": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.1.0.tgz",
      "integrity": "sha512-8y9YjtM1JBJU/A9Kc+SbaOV4y29sSWckBwMHa+FGtVj5gN/sbnKDf6xJUl+8g7FAij9LVaP8C24DUiH/f/2Z9A==",
      "dev": true
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
    },
    "esrecurse": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.2.1.tgz",
      "integrity": "sha512-64RBB++fIOAXPw3P9cy89qfMlvZEXZkqqJkjqqXIvzP5ezRZjW+lPWjw35UX/3EhUPFYbg5ER4JYgDw4007/DQ==",
      "dev": true,
      "requires": {
        "estraverse": "^4.1.0"
      }
    },
    "estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "event-target-shim": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
      "integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ=="
    },
    "eventemitter3": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-3.1.2.tgz",
      "integrity": "sha512-tvtQIeLVHjDkJYnzf2dgVMxfuSGJeM/7UCG17TT4EumTfNtF+0nebF/4zWOIkCreAbtNqhGEboB6BWrwqNaw4Q=="
    },
    "exec-sh": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.3.2.tgz",
      "integrity": "sha512-9sLAvzhI5nc8TpuQUh4ahMdCrWT00wPWz7j47/emR5+2qEfoZP5zzUXvx+vdx+H6ohhnsYC31iX04QLYJK8zTg=="
    },
    "execa": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
      "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
      "requires": {
        "cross-spawn": "^6.0.0",
        "get-stream": "^4.0.0",
        "is-stream": "^1.1.0",
        "npm-run-path": "^2.0.0",
        "p-finally": "^1.0.0",
        "signal-exit": "^3.0.0",
        "strip-eof": "^1.0.0"
      }
    },
    "exit": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
      "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw=",
      "dev": true
    },
    "expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "requires": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "expect": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/expect/-/expect-24.9.0.tgz",
      "integrity": "sha512-wvVAx8XIol3Z5m9zvZXiyZOQ+sRJqNTIm6sGjdWlaZIeupQGO3WbYI+15D/AmEwZywL6wtJkbAbJtzkOfBuR0Q==",
      "dev": true,
      "requires": {
        "@jest/types": "^24.9.0",
        "ansi-styles": "^3.2.0",
        "jest-get-type": "^24.9.0",
        "jest-matcher-utils": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-regex-util": "^24.9.0"
      }
    },
    "extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "requires": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "external-editor": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-2.2.0.tgz",
      "integrity": "sha512-bSn6gvGxKt+b7+6TKEv1ZycHleA7aHhRHyAqJyp5pbUFuYYNIzpZnQDk7AsYckyWdEnTeAnay0aCy2aV6iTk9A==",
      "requires": {
        "chardet": "^0.4.0",
        "iconv-lite": "^0.4.17",
        "tmp": "^0.0.33"
      }
    },
    "extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "requires": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true
    },
    "fancy-log": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/fancy-log/-/fancy-log-1.3.3.tgz",
      "integrity": "sha512-k9oEhlyc0FrVh25qYuSELjr8oxsCoc4/LEZfg2iJJrfEk/tZL9bCoJE47gqAvI2m/AUjluCS4+3I0eTx8n3AEw==",
      "requires": {
        "ansi-gray": "^0.1.1",
        "color-support": "^1.1.3",
        "parse-node-version": "^1.0.0",
        "time-stamp": "^1.0.0"
      }
    },
    "fast-deep-equal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
      "dev": true
    },
    "fast-diff": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.2.0.tgz",
      "integrity": "sha512-xJuoT5+L99XlZ8twedaRf6Ax2TgQVxvgZOYoPKqZufmJib0tL2tegPBOZb1pVNgIhlqDlA0eO0c3wBvQcmzx4w==",
      "dev": true
    },
    "fast-json-stable-stringify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
      "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fb-watchman": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.0.tgz",
      "integrity": "sha1-VOmr99+i8mzZsWNsWIwa/AXeXVg=",
      "requires": {
        "bser": "^2.0.0"
      }
    },
    "fbjs": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-1.0.0.tgz",
      "integrity": "sha512-MUgcMEJaFhCaF1QtWGnmq9ZDRAzECTCRAF7O6UZIlAlkTs1SasiX9aP0Iw7wfD2mJ7wDTNfg2w7u5fSCwJk1OA==",
      "requires": {
        "core-js": "^2.4.1",
        "fbjs-css-vars": "^1.0.0",
        "isomorphic-fetch": "^2.1.1",
        "loose-envify": "^1.0.0",
        "object-assign": "^4.1.0",
        "promise": "^7.1.1",
        "setimmediate": "^1.0.5",
        "ua-parser-js": "^0.7.18"
      }
    },
    "fbjs-css-vars": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/fbjs-css-vars/-/fbjs-css-vars-1.0.2.tgz",
      "integrity": "sha512-b2XGFAFdWZWg0phtAWLHCk836A1Xann+I+Dgd3Gk64MHKZO44FfoD1KxyvbSh0qZsIoXQGGlVztIY+oitJPpRQ=="
    },
    "fbjs-scripts": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/fbjs-scripts/-/fbjs-scripts-1.2.0.tgz",
      "integrity": "sha512-5krZ8T0Bf8uky0abPoCLrfa7Orxd8UH4Qq8hRUF2RZYNMu+FmEOrBc7Ib3YVONmxTXTlLAvyrrdrVmksDb2OqQ==",
      "requires": {
        "@babel/core": "^7.0.0",
        "ansi-colors": "^1.0.1",
        "babel-preset-fbjs": "^3.2.0",
        "core-js": "^2.4.1",
        "cross-spawn": "^5.1.0",
        "fancy-log": "^1.3.2",
        "object-assign": "^4.0.1",
        "plugin-error": "^0.1.2",
        "semver": "^5.1.0",
        "through2": "^2.0.0"
      },
      "dependencies": {
        "cross-spawn": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
          "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
          "requires": {
            "lru-cache": "^4.0.1",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        }
      }
    },
    "figures": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
      "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
      "requires": {
        "escape-string-regexp": "^1.0.5"
      }
    },
    "fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      }
    },
    "find-cache-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
      "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
      "requires": {
        "commondir": "^1.0.1",
        "make-dir": "^2.0.0",
        "pkg-dir": "^3.0.0"
      }
    },
    "find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "requires": {
        "locate-path": "^3.0.0"
      }
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA="
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true
    },
    "form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      }
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "fs-extra": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-7.0.1.tgz",
      "integrity": "sha512-YJDaCJZEnBmcbw13fvdAM9AwNOJwOzrE4pqMqBq5nFiEqXUqHwlK4B+3pUw6JNvfSPtX05xFHtYy/1ni01eGCw==",
      "requires": {
        "graceful-fs": "^4.1.2",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "fsevents": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.9.tgz",
      "integrity": "sha512-oeyj2H3EjjonWcFjD5NvZNE9Rqe4UW+nQBU2HNeKw0koVLEFIhtyETyAakeAM3de7Z/SW5kcA+fZUait9EApnw==",
      "optional": true,
      "requires": {
        "nan": "^2.12.1",
        "node-pre-gyp": "^0.12.0"
      },
      "dependencies": {
        "abbrev": {
          "version": "1.1.1",
          "bundled": true,
          "optional": true
        },
        "ansi-regex": {
          "version": "2.1.1",
          "bundled": true
        },
        "aproba": {
          "version": "1.2.0",
          "bundled": true,
          "optional": true
        },
        "are-we-there-yet": {
          "version": "1.1.5",
          "bundled": true,
          "optional": true,
          "requires": {
            "delegates": "^1.0.0",
            "readable-stream": "^2.0.6"
          }
        },
        "balanced-match": {
          "version": "1.0.0",
          "bundled": true
        },
        "brace-expansion": {
          "version": "1.1.11",
          "bundled": true,
          "requires": {
            "balanced-match": "^1.0.0",
            "concat-map": "0.0.1"
          }
        },
        "chownr": {
          "version": "1.1.1",
          "bundled": true,
          "optional": true
        },
        "code-point-at": {
          "version": "1.1.0",
          "bundled": true
        },
        "concat-map": {
          "version": "0.0.1",
          "bundled": true
        },
        "console-control-strings": {
          "version": "1.1.0",
          "bundled": true
        },
        "core-util-is": {
          "version": "1.0.2",
          "bundled": true,
          "optional": true
        },
        "debug": {
          "version": "4.1.1",
          "bundled": true,
          "optional": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "deep-extend": {
          "version": "0.6.0",
          "bundled": true,
          "optional": true
        },
        "delegates": {
          "version": "1.0.0",
          "bundled": true,
          "optional": true
        },
        "detect-libc": {
          "version": "1.0.3",
          "bundled": true,
          "optional": true
        },
        "fs-minipass": {
          "version": "1.2.5",
          "bundled": true,
          "optional": true,
          "requires": {
            "minipass": "^2.2.1"
          }
        },
        "fs.realpath": {
          "version": "1.0.0",
          "bundled": true,
          "optional": true
        },
        "gauge": {
          "version": "2.7.4",
          "bundled": true,
          "optional": true,
          "requires": {
            "aproba": "^1.0.3",
            "console-control-strings": "^1.0.0",
            "has-unicode": "^2.0.0",
            "object-assign": "^4.1.0",
            "signal-exit": "^3.0.0",
            "string-width": "^1.0.1",
            "strip-ansi": "^3.0.1",
            "wide-align": "^1.1.0"
          }
        },
        "glob": {
          "version": "7.1.3",
          "bundled": true,
          "optional": true,
          "requires": {
            "fs.realpath": "^1.0.0",
            "inflight": "^1.0.4",
            "inherits": "2",
            "minimatch": "^3.0.4",
            "once": "^1.3.0",
            "path-is-absolute": "^1.0.0"
          }
        },
        "has-unicode": {
          "version": "2.0.1",
          "bundled": true,
          "optional": true
        },
        "iconv-lite": {
          "version": "0.4.24",
          "bundled": true,
          "optional": true,
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3"
          }
        },
        "ignore-walk": {
          "version": "3.0.1",
          "bundled": true,
          "optional": true,
          "requires": {
            "minimatch": "^3.0.4"
          }
        },
        "inflight": {
          "version": "1.0.6",
          "bundled": true,
          "optional": true,
          "requires": {
            "once": "^1.3.0",
            "wrappy": "1"
          }
        },
        "inherits": {
          "version": "2.0.3",
          "bundled": true
        },
        "ini": {
          "version": "1.3.5",
          "bundled": true,
          "optional": true
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "bundled": true,
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "isarray": {
          "version": "1.0.0",
          "bundled": true,
          "optional": true
        },
        "minimatch": {
          "version": "3.0.4",
          "bundled": true,
          "requires": {
            "brace-expansion": "^1.1.7"
          }
        },
        "minimist": {
          "version": "0.0.8",
          "bundled": true
        },
        "minipass": {
          "version": "2.3.5",
          "bundled": true,
          "requires": {
            "safe-buffer": "^5.1.2",
            "yallist": "^3.0.0"
          }
        },
        "minizlib": {
          "version": "1.2.1",
          "bundled": true,
          "optional": true,
          "requires": {
            "minipass": "^2.2.1"
          }
        },
        "mkdirp": {
          "version": "0.5.1",
          "bundled": true,
          "requires": {
            "minimist": "0.0.8"
          }
        },
        "ms": {
          "version": "2.1.1",
          "bundled": true,
          "optional": true
        },
        "needle": {
          "version": "2.3.0",
          "bundled": true,
          "optional": true,
          "requires": {
            "debug": "^4.1.0",
            "iconv-lite": "^0.4.4",
            "sax": "^1.2.4"
          }
        },
        "node-pre-gyp": {
          "version": "0.12.0",
          "bundled": true,
          "optional": true,
          "requires": {
            "detect-libc": "^1.0.2",
            "mkdirp": "^0.5.1",
            "needle": "^2.2.1",
            "nopt": "^4.0.1",
            "npm-packlist": "^1.1.6",
            "npmlog": "^4.0.2",
            "rc": "^1.2.7",
            "rimraf": "^2.6.1",
            "semver": "^5.3.0",
            "tar": "^4"
          }
        },
        "nopt": {
          "version": "4.0.1",
          "bundled": true,
          "optional": true,
          "requires": {
            "abbrev": "1",
            "osenv": "^0.1.4"
          }
        },
        "npm-bundled": {
          "version": "1.0.6",
          "bundled": true,
          "optional": true
        },
        "npm-packlist": {
          "version": "1.4.1",
          "bundled": true,
          "optional": true,
          "requires": {
            "ignore-walk": "^3.0.1",
            "npm-bundled": "^1.0.1"
          }
        },
        "npmlog": {
          "version": "4.1.2",
          "bundled": true,
          "optional": true,
          "requires": {
            "are-we-there-yet": "~1.1.2",
            "console-control-strings": "~1.1.0",
            "gauge": "~2.7.3",
            "set-blocking": "~2.0.0"
          }
        },
        "number-is-nan": {
          "version": "1.0.1",
          "bundled": true
        },
        "object-assign": {
          "version": "4.1.1",
          "bundled": true,
          "optional": true
        },
        "once": {
          "version": "1.4.0",
          "bundled": true,
          "requires": {
            "wrappy": "1"
          }
        },
        "os-homedir": {
          "version": "1.0.2",
          "bundled": true,
          "optional": true
        },
        "os-tmpdir": {
          "version": "1.0.2",
          "bundled": true,
          "optional": true
        },
        "osenv": {
          "version": "0.1.5",
          "bundled": true,
          "optional": true,
          "requires": {
            "os-homedir": "^1.0.0",
            "os-tmpdir": "^1.0.0"
          }
        },
        "path-is-absolute": {
          "version": "1.0.1",
          "bundled": true,
          "optional": true
        },
        "process-nextick-args": {
          "version": "2.0.0",
          "bundled": true,
          "optional": true
        },
        "rc": {
          "version": "1.2.8",
          "bundled": true,
          "optional": true,
          "requires": {
            "deep-extend": "^0.6.0",
            "ini": "~1.3.0",
            "minimist": "^1.2.0",
            "strip-json-comments": "~2.0.1"
          },
          "dependencies": {
            "minimist": {
              "version": "1.2.0",
              "bundled": true,
              "optional": true
            }
          }
        },
        "readable-stream": {
          "version": "2.3.6",
          "bundled": true,
          "optional": true,
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "rimraf": {
          "version": "2.6.3",
          "bundled": true,
          "optional": true,
          "requires": {
            "glob": "^7.1.3"
          }
        },
        "safe-buffer": {
          "version": "5.1.2",
          "bundled": true
        },
        "safer-buffer": {
          "version": "2.1.2",
          "bundled": true,
          "optional": true
        },
        "sax": {
          "version": "1.2.4",
          "bundled": true,
          "optional": true
        },
        "semver": {
          "version": "5.7.0",
          "bundled": true,
          "optional": true
        },
        "set-blocking": {
          "version": "2.0.0",
          "bundled": true,
          "optional": true
        },
        "signal-exit": {
          "version": "3.0.2",
          "bundled": true,
          "optional": true
        },
        "string-width": {
          "version": "1.0.2",
          "bundled": true,
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "bundled": true,
          "optional": true,
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "bundled": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "strip-json-comments": {
          "version": "2.0.1",
          "bundled": true,
          "optional": true
        },
        "tar": {
          "version": "4.4.8",
          "bundled": true,
          "optional": true,
          "requires": {
            "chownr": "^1.1.1",
            "fs-minipass": "^1.2.5",
            "minipass": "^2.3.4",
            "minizlib": "^1.1.1",
            "mkdirp": "^0.5.0",
            "safe-buffer": "^5.1.2",
            "yallist": "^3.0.2"
          }
        },
        "util-deprecate": {
          "version": "1.0.2",
          "bundled": true,
          "optional": true
        },
        "wide-align": {
          "version": "1.1.3",
          "bundled": true,
          "optional": true,
          "requires": {
            "string-width": "^1.0.2 || 2"
          }
        },
        "wrappy": {
          "version": "1.0.2",
          "bundled": true
        },
        "yallist": {
          "version": "3.0.3",
          "bundled": true
        }
      }
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
    "get-caller-file": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w=="
    },
    "get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "requires": {
        "pump": "^3.0.0"
      }
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg="
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "glob": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "global": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/global/-/global-4.4.0.tgz",
      "integrity": "sha512-wv/LAoHdRE3BeTGz53FAamhGlPLhlssK45usmGFThIi4XqnBmjKQ16u+RNbP7WvigRZDxUsM0J3gcQ5yicaL0w==",
      "dev": true,
      "requires": {
        "min-document": "^2.19.0",
        "process": "^0.11.10"
      }
    },
    "globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
    },
    "graceful-fs": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.2.tgz",
      "integrity": "sha512-IItsdsea19BoLC7ELy13q1iJFNmd7ofZH5+X/pJr90/nRoPEX0DJo1dHDbgtYWOhJhcCgMDTOw84RZ72q6lB+Q=="
    },
    "growly": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
      "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE="
    },
    "handlebars": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.4.0.tgz",
      "integrity": "sha512-xkRtOt3/3DzTKMOt3xahj2M/EqNhY988T+imYSlMgs5fVhLN2fmKVVj0LtEGmb+3UUYV5Qmm1052Mm3dIQxOvw==",
      "dev": true,
      "requires": {
        "neo-async": "^2.6.0",
        "optimist": "^0.6.1",
        "source-map": "^0.6.1",
        "uglify-js": "^3.1.4"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "uglify-js": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.6.0.tgz",
          "integrity": "sha512-W+jrUHJr3DXKhrsS7NUVxn3zqMOFn0hL/Ei6v0anCIMoKC93TjcflTagwIHLW7SfMFfiQuktQyFVCFHGUE0+yg==",
          "dev": true,
          "optional": true,
          "requires": {
            "commander": "~2.20.0",
            "source-map": "~0.6.1"
          }
        }
      }
    },
    "har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true
    },
    "har-validator": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
      "integrity": "sha512-sNvOCzEQNr/qrvJgc3UG/kD4QtlHycrzwS+6mfTrrSq97BvaYcPZZI1ZSqGSPR73Cxn4LKTD4PttRwfU7jWq5g==",
      "dev": true,
      "requires": {
        "ajv": "^6.5.5",
        "har-schema": "^2.0.0"
      }
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
    },
    "has-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.0.tgz",
      "integrity": "sha1-uhqPGvKg/DllD1yFA2dwQSIGO0Q="
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "hermes-engine": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/hermes-engine/-/hermes-engine-0.2.1.tgz",
      "integrity": "sha512-eNHUQHuadDMJARpaqvlCZoK/Nitpj6oywq3vQ3wCwEsww5morX34mW5PmKWQTO7aU0ck0hgulxR+EVDlXygGxQ=="
    },
    "hosted-git-info": {
      "version": "2.8.4",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.4.tgz",
      "integrity": "sha512-pzXIvANXEFrc5oFFXRMkbLPQ2rXRoDERwDLyrcUxGhaZhgP54BBSl9Oheh7Vv0T090cszWBxPjkQQ5Sq1PbBRQ=="
    },
    "html-encoding-sniffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
      "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
      "dev": true,
      "requires": {
        "whatwg-encoding": "^1.0.1"
      }
    },
    "http-errors": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.3.tgz",
      "integrity": "sha512-ZTTX0MWrsQ2ZAhA1cejAwDLycFsd7I7nVtnkT3Ol0aqodaKW+0CTZDQ1uBv5whptCnc8e8HeRRJxRs0kmm/Qfw==",
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.4",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      }
    },
    "http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      }
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "ignore": {
      "version": "5.1.4",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.4.tgz",
      "integrity": "sha512-MzbUSahkTW1u7JpKKjY7LCARd1fU5W2rLdxlM4kdkayuCwZImjkpluF9CM1aLewYJguPDqewLam18Y6AU69A8A==",
      "dev": true
    },
    "image-size": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/image-size/-/image-size-0.6.3.tgz",
      "integrity": "sha512-47xSUiQioGaB96nqtp5/q55m0aBQSQdyIloMOc/x+QVTDZLNmXE892IIDrJ0hM1A5vcNUDD5tDffkSP5lCaIIA=="
    },
    "import-fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
      "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
      "requires": {
        "caller-path": "^2.0.0",
        "resolve-from": "^3.0.0"
      }
    },
    "import-local": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-2.0.0.tgz",
      "integrity": "sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==",
      "dev": true,
      "requires": {
        "pkg-dir": "^3.0.0",
        "resolve-cwd": "^2.0.0"
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "inquirer": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-3.3.0.tgz",
      "integrity": "sha512-h+xtnyk4EwKvFWHrUYsWErEVR+igKtLdchu+o0Z1RL7VU/jVMFbYir2bp6bAj8efFNxWqHX0dIss6fJQ+/+qeQ==",
      "requires": {
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.0",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^2.0.4",
        "figures": "^2.0.0",
        "lodash": "^4.3.0",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rx-lite": "^4.0.8",
        "rx-lite-aggregates": "^4.0.8",
        "string-width": "^2.1.0",
        "strip-ansi": "^4.0.0",
        "through": "^2.3.6"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "invariant": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "requires": {
        "loose-envify": "^1.0.0"
      }
    },
    "invert-kv": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-2.0.0.tgz",
      "integrity": "sha512-wPVv/y/QQ/Uiirj/vh3oP+1Ww+AWehmi1g5fFWGPF6IpCBCDVrhgHRMvrLfdYcwDh3QJbGXDW4JAuzxElLSqKA=="
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
    },
    "is-callable": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.1.4.tgz",
      "integrity": "sha512-r5p9sxJjYnArLjObpjA4xu5EKI3CuKHkJXMhT7kwbpUyIFD1n5PMAsoPvWnvtZiNz7LjkYDRZhd7FlI0eMijEA==",
      "dev": true
    },
    "is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "requires": {
        "ci-info": "^2.0.0"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-date-object": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.1.tgz",
      "integrity": "sha1-mqIOtq7rv/d/vTPnTKAbM1gdOhY=",
      "dev": true
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "requires": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        }
      }
    },
    "is-directory": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
      "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE="
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
    },
    "is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
    },
    "is-generator-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
      "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==",
      "dev": true
    },
    "is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "is-promise": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
      "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o="
    },
    "is-regex": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.0.4.tgz",
      "integrity": "sha1-VRdIm1RwkbCTDglWVM7SXul+lJE=",
      "dev": true,
      "requires": {
        "has": "^1.0.1"
      }
    },
    "is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
    },
    "is-symbol": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.2.tgz",
      "integrity": "sha512-HS8bZ9ox60yCJLH9snBpIwv9pYUAkcuLhSA1oero1UB5y9aiQpRA8y2ex945AOtCZL1lJDeIk3G5LthswI46Lw==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.0"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
    },
    "is-wsl": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0="
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
    },
    "isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
    },
    "isomorphic-fetch": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/isomorphic-fetch/-/isomorphic-fetch-2.2.1.tgz",
      "integrity": "sha1-YRrhrPFPXoH3KVB0coGf6XM1WKk=",
      "requires": {
        "node-fetch": "^1.0.1",
        "whatwg-fetch": ">=0.10.0"
      },
      "dependencies": {
        "node-fetch": {
          "version": "1.7.3",
          "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-1.7.3.tgz",
          "integrity": "sha512-NhZ4CsKx7cYm2vSrBAr2PvFOe6sWDf0UYLRqA6svUYg7+/TSfVAu49jYC4BvQ4Sms9SZgdqGBgroqfDhJdTyKQ==",
          "requires": {
            "encoding": "^0.1.11",
            "is-stream": "^1.0.1"
          }
        }
      }
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "istanbul-lib-coverage": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.5.tgz",
      "integrity": "sha512-8aXznuEPCJvGnMSRft4udDRDtb1V3pkQkMMI5LI+6HuQz5oQ4J2UFn1H82raA3qJtyOLkkwVqICBQkjnGtn5mA==",
      "dev": true
    },
    "istanbul-lib-instrument": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-3.3.0.tgz",
      "integrity": "sha512-5nnIN4vo5xQZHdXno/YDXJ0G+I3dAm4XgzfSVTPLQpj/zAV2dV6Juy0yaf10/zrJOJeHoN3fraFe+XRq2bFVZA==",
      "dev": true,
      "requires": {
        "@babel/generator": "^7.4.0",
        "@babel/parser": "^7.4.3",
        "@babel/template": "^7.4.0",
        "@babel/traverse": "^7.4.3",
        "@babel/types": "^7.4.0",
        "istanbul-lib-coverage": "^2.0.5",
        "semver": "^6.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "istanbul-lib-report": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-2.0.8.tgz",
      "integrity": "sha512-fHBeG573EIihhAblwgxrSenp0Dby6tJMFR/HvlerBsrCTD5bkUuoNtn3gVh29ZCS824cGGBPn7Sg7cNk+2xUsQ==",
      "dev": true,
      "requires": {
        "istanbul-lib-coverage": "^2.0.5",
        "make-dir": "^2.1.0",
        "supports-color": "^6.1.0"
      },
      "dependencies": {
        "supports-color": {
          "version": "6.1.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "istanbul-lib-source-maps": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-3.0.6.tgz",
      "integrity": "sha512-R47KzMtDJH6X4/YW9XTx+jrLnZnscW4VpNN+1PViSYTejLVPWv7oov+Duf8YQSPyVRUvueQqz1TcsC6mooZTXw==",
      "dev": true,
      "requires": {
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^2.0.5",
        "make-dir": "^2.1.0",
        "rimraf": "^2.6.3",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "istanbul-reports": {
      "version": "2.2.6",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.6.tgz",
      "integrity": "sha512-SKi4rnMyLBKe0Jy2uUdx28h8oG7ph2PPuQPvIAh31d+Ci+lSiEu4C+h3oBPuJ9+mPKhOyW0M8gY4U5NM1WLeXA==",
      "dev": true,
      "requires": {
        "handlebars": "^4.1.2"
      }
    },
    "jest": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest/-/jest-24.9.0.tgz",
      "integrity": "sha512-YvkBL1Zm7d2B1+h5fHEOdyjCG+sGMz4f8D86/0HiqJ6MB4MnDc8FgP5vdWsGnemOQro7lnYo8UakZ3+5A0jxGw==",
      "dev": true,
      "requires": {
        "import-local": "^2.0.0",
        "jest-cli": "^24.9.0"
      },
      "dependencies": {
        "cliui": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
          "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
          "dev": true,
          "requires": {
            "string-width": "^3.1.0",
            "strip-ansi": "^5.2.0",
            "wrap-ansi": "^5.1.0"
          }
        },
        "get-caller-file": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
          "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
          "dev": true
        },
        "jest-cli": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-24.9.0.tgz",
          "integrity": "sha512-+VLRKyitT3BWoMeSUIHRxV/2g8y9gw91Jh5z2UmXZzkZKpbC08CSehVxgHUwTpy+HwGcns/tqafQDJW7imYvGg==",
          "dev": true,
          "requires": {
            "@jest/core": "^24.9.0",
            "@jest/test-result": "^24.9.0",
            "@jest/types": "^24.9.0",
            "chalk": "^2.0.1",
            "exit": "^0.1.2",
            "import-local": "^2.0.0",
            "is-ci": "^2.0.0",
            "jest-config": "^24.9.0",
            "jest-util": "^24.9.0",
            "jest-validate": "^24.9.0",
            "prompts": "^2.0.1",
            "realpath-native": "^1.1.0",
            "yargs": "^13.3.0"
          }
        },
        "require-main-filename": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
          "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
          "dev": true
        },
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "dev": true,
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        },
        "wrap-ansi": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
          "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.0",
            "string-width": "^3.0.0",
            "strip-ansi": "^5.0.0"
          }
        },
        "yargs": {
          "version": "13.3.0",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.0.tgz",
          "integrity": "sha512-2eehun/8ALW8TLoIl7MVaRUrg+yCnenu8B4kBlRxj3GJGDKU1Og7sMXPNm1BYyM1DOJmTZ4YeN/Nwxv+8XJsUA==",
          "dev": true,
          "requires": {
            "cliui": "^5.0.0",
            "find-up": "^3.0.0",
            "get-caller-file": "^2.0.1",
            "require-directory": "^2.1.1",
            "require-main-filename": "^2.0.0",
            "set-blocking": "^2.0.0",
            "string-width": "^3.0.0",
            "which-module": "^2.0.0",
            "y18n": "^4.0.0",
            "yargs-parser": "^13.1.1"
          }
        },
        "yargs-parser": {
          "version": "13.1.1",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.1.tgz",
          "integrity": "sha512-oVAVsHz6uFrg3XQheFII8ESO2ssAf9luWuAd6Wexsu4F3OtIW0o8IribPXYrD4WC24LWtPrJlGy87y5udK+dxQ==",
          "dev": true,
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "jest-changed-files": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-24.9.0.tgz",
      "integrity": "sha512-6aTWpe2mHF0DhL28WjdkO8LyGjs3zItPET4bMSeXU6T3ub4FPMw+mcOcbdGXQOAfmLcxofD23/5Bl9Z4AkFwqg==",
      "dev": true,
      "requires": {
        "@jest/types": "^24.9.0",
        "execa": "^1.0.0",
        "throat": "^4.0.0"
      }
    },
    "jest-config": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-24.9.0.tgz",
      "integrity": "sha512-RATtQJtVYQrp7fvWg6f5y3pEFj9I+H8sWw4aKxnDZ96mob5i5SD6ZEGWgMLXQ4LE8UurrjbdlLWdUeo+28QpfQ==",
      "dev": true,
      "requires": {
        "@babel/core": "^7.1.0",
        "@jest/test-sequencer": "^24.9.0",
        "@jest/types": "^24.9.0",
        "babel-jest": "^24.9.0",
        "chalk": "^2.0.1",
        "glob": "^7.1.1",
        "jest-environment-jsdom": "^24.9.0",
        "jest-environment-node": "^24.9.0",
        "jest-get-type": "^24.9.0",
        "jest-jasmine2": "^24.9.0",
        "jest-regex-util": "^24.3.0",
        "jest-resolve": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-validate": "^24.9.0",
        "micromatch": "^3.1.10",
        "pretty-format": "^24.9.0",
        "realpath-native": "^1.1.0"
      }
    },
    "jest-diff": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
      "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "diff-sequences": "^24.9.0",
        "jest-get-type": "^24.9.0",
        "pretty-format": "^24.9.0"
      }
    },
    "jest-docblock": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-21.2.0.tgz",
      "integrity": "sha512-5IZ7sY9dBAYSV+YjQ0Ovb540Ku7AO9Z5o2Cg789xj167iQuZ2cG+z0f3Uct6WeYLbU6aQiM2pCs7sZ+4dotydw==",
      "dev": true
    },
    "jest-each": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-24.9.0.tgz",
      "integrity": "sha512-ONi0R4BvW45cw8s2Lrx8YgbeXL1oCQ/wIDwmsM3CqM/nlblNCPmnC3IPQlMbRFZu3wKdQ2U8BqM6lh3LJ5Bsog==",
      "dev": true,
      "requires": {
        "@jest/types": "^24.9.0",
        "chalk": "^2.0.1",
        "jest-get-type": "^24.9.0",
        "jest-util": "^24.9.0",
        "pretty-format": "^24.9.0"
      }
    },
    "jest-environment-jsdom": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-24.9.0.tgz",
      "integrity": "sha512-Zv9FV9NBRzLuALXjvRijO2351DRQeLYXtpD4xNvfoVFw21IOKNhZAEUKcbiEtjTkm2GsJ3boMVgkaR7rN8qetA==",
      "dev": true,
      "requires": {
        "@jest/environment": "^24.9.0",
        "@jest/fake-timers": "^24.9.0",
        "@jest/types": "^24.9.0",
        "jest-mock": "^24.9.0",
        "jest-util": "^24.9.0",
        "jsdom": "^11.5.1"
      }
    },
    "jest-environment-node": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-24.9.0.tgz",
      "integrity": "sha512-6d4V2f4nxzIzwendo27Tr0aFm+IXWa0XEUnaH6nU0FMaozxovt+sfRvh4J47wL1OvF83I3SSTu0XK+i4Bqe7uA==",
      "dev": true,
      "requires": {
        "@jest/environment": "^24.9.0",
        "@jest/fake-timers": "^24.9.0",
        "@jest/types": "^24.9.0",
        "jest-mock": "^24.9.0",
        "jest-util": "^24.9.0"
      }
    },
    "jest-get-type": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
      "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q=="
    },
    "jest-haste-map": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
      "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
      "requires": {
        "@jest/types": "^24.9.0",
        "anymatch": "^2.0.0",
        "fb-watchman": "^2.0.0",
        "fsevents": "^1.2.7",
        "graceful-fs": "^4.1.15",
        "invariant": "^2.2.4",
        "jest-serializer": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-worker": "^24.9.0",
        "micromatch": "^3.1.10",
        "sane": "^4.0.3",
        "walker": "^1.0.7"
      }
    },
    "jest-jasmine2": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-24.9.0.tgz",
      "integrity": "sha512-Cq7vkAgaYKp+PsX+2/JbTarrk0DmNhsEtqBXNwUHkdlbrTBLtMJINADf2mf5FkowNsq8evbPc07/qFO0AdKTzw==",
      "dev": true,
      "requires": {
        "@babel/traverse": "^7.1.0",
        "@jest/environment": "^24.9.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "chalk": "^2.0.1",
        "co": "^4.6.0",
        "expect": "^24.9.0",
        "is-generator-fn": "^2.0.0",
        "jest-each": "^24.9.0",
        "jest-matcher-utils": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-runtime": "^24.9.0",
        "jest-snapshot": "^24.9.0",
        "jest-util": "^24.9.0",
        "pretty-format": "^24.9.0",
        "throat": "^4.0.0"
      }
    },
    "jest-leak-detector": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-24.9.0.tgz",
      "integrity": "sha512-tYkFIDsiKTGwb2FG1w8hX9V0aUb2ot8zY/2nFg087dUageonw1zrLMP4W6zsRO59dPkTSKie+D4rhMuP9nRmrA==",
      "dev": true,
      "requires": {
        "jest-get-type": "^24.9.0",
        "pretty-format": "^24.9.0"
      }
    },
    "jest-matcher-utils": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
      "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "jest-diff": "^24.9.0",
        "jest-get-type": "^24.9.0",
        "pretty-format": "^24.9.0"
      }
    },
    "jest-message-util": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
      "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/stack-utils": "^1.0.1",
        "chalk": "^2.0.1",
        "micromatch": "^3.1.10",
        "slash": "^2.0.0",
        "stack-utils": "^1.0.1"
      },
      "dependencies": {
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A=="
        }
      }
    },
    "jest-mock": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
      "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
      "requires": {
        "@jest/types": "^24.9.0"
      }
    },
    "jest-pnp-resolver": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.1.tgz",
      "integrity": "sha512-pgFw2tm54fzgYvc/OHrnysABEObZCUNFnhjoRjaVOCN8NYc032/gVjPaHD4Aq6ApkSieWtfKAFQtmDKAmhupnQ==",
      "dev": true
    },
    "jest-regex-util": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
      "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
      "dev": true
    },
    "jest-resolve": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
      "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
      "dev": true,
      "requires": {
        "@jest/types": "^24.9.0",
        "browser-resolve": "^1.11.3",
        "chalk": "^2.0.1",
        "jest-pnp-resolver": "^1.2.1",
        "realpath-native": "^1.1.0"
      }
    },
    "jest-resolve-dependencies": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-24.9.0.tgz",
      "integrity": "sha512-Fm7b6AlWnYhT0BXy4hXpactHIqER7erNgIsIozDXWl5dVm+k8XdGVe1oTg1JyaFnOxarMEbax3wyRJqGP2Pq+g==",
      "dev": true,
      "requires": {
        "@jest/types": "^24.9.0",
        "jest-regex-util": "^24.3.0",
        "jest-snapshot": "^24.9.0"
      }
    },
    "jest-runner": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-24.9.0.tgz",
      "integrity": "sha512-KksJQyI3/0mhcfspnxxEOBueGrd5E4vV7ADQLT9ESaCzz02WnbdbKWIf5Mkaucoaj7obQckYPVX6JJhgUcoWWg==",
      "dev": true,
      "requires": {
        "@jest/console": "^24.7.1",
        "@jest/environment": "^24.9.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "chalk": "^2.4.2",
        "exit": "^0.1.2",
        "graceful-fs": "^4.1.15",
        "jest-config": "^24.9.0",
        "jest-docblock": "^24.3.0",
        "jest-haste-map": "^24.9.0",
        "jest-jasmine2": "^24.9.0",
        "jest-leak-detector": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-resolve": "^24.9.0",
        "jest-runtime": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-worker": "^24.6.0",
        "source-map-support": "^0.5.6",
        "throat": "^4.0.0"
      },
      "dependencies": {
        "jest-docblock": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-24.9.0.tgz",
          "integrity": "sha512-F1DjdpDMJMA1cN6He0FNYNZlo3yYmOtRUnktrT9Q37njYzC5WEaDdmbynIgy0L/IvXvvgsG8OsqhLPXTpfmZAA==",
          "dev": true,
          "requires": {
            "detect-newline": "^2.1.0"
          }
        }
      }
    },
    "jest-runtime": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-24.9.0.tgz",
      "integrity": "sha512-8oNqgnmF3v2J6PVRM2Jfuj8oX3syKmaynlDMMKQ4iyzbQzIG6th5ub/lM2bCMTmoTKM3ykcUYI2Pw9xwNtjMnw==",
      "dev": true,
      "requires": {
        "@jest/console": "^24.7.1",
        "@jest/environment": "^24.9.0",
        "@jest/source-map": "^24.3.0",
        "@jest/transform": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/yargs": "^13.0.0",
        "chalk": "^2.0.1",
        "exit": "^0.1.2",
        "glob": "^7.1.3",
        "graceful-fs": "^4.1.15",
        "jest-config": "^24.9.0",
        "jest-haste-map": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-mock": "^24.9.0",
        "jest-regex-util": "^24.3.0",
        "jest-resolve": "^24.9.0",
        "jest-snapshot": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-validate": "^24.9.0",
        "realpath-native": "^1.1.0",
        "slash": "^2.0.0",
        "strip-bom": "^3.0.0",
        "yargs": "^13.3.0"
      },
      "dependencies": {
        "cliui": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
          "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
          "dev": true,
          "requires": {
            "string-width": "^3.1.0",
            "strip-ansi": "^5.2.0",
            "wrap-ansi": "^5.1.0"
          }
        },
        "get-caller-file": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
          "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
          "dev": true
        },
        "require-main-filename": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
          "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
          "dev": true
        },
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
          "dev": true
        },
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "dev": true,
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        },
        "wrap-ansi": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
          "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.0",
            "string-width": "^3.0.0",
            "strip-ansi": "^5.0.0"
          }
        },
        "yargs": {
          "version": "13.3.0",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.0.tgz",
          "integrity": "sha512-2eehun/8ALW8TLoIl7MVaRUrg+yCnenu8B4kBlRxj3GJGDKU1Og7sMXPNm1BYyM1DOJmTZ4YeN/Nwxv+8XJsUA==",
          "dev": true,
          "requires": {
            "cliui": "^5.0.0",
            "find-up": "^3.0.0",
            "get-caller-file": "^2.0.1",
            "require-directory": "^2.1.1",
            "require-main-filename": "^2.0.0",
            "set-blocking": "^2.0.0",
            "string-width": "^3.0.0",
            "which-module": "^2.0.0",
            "y18n": "^4.0.0",
            "yargs-parser": "^13.1.1"
          }
        },
        "yargs-parser": {
          "version": "13.1.1",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.1.tgz",
          "integrity": "sha512-oVAVsHz6uFrg3XQheFII8ESO2ssAf9luWuAd6Wexsu4F3OtIW0o8IribPXYrD4WC24LWtPrJlGy87y5udK+dxQ==",
          "dev": true,
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "jest-serializer": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
      "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ=="
    },
    "jest-snapshot": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-24.9.0.tgz",
      "integrity": "sha512-uI/rszGSs73xCM0l+up7O7a40o90cnrk429LOiK3aeTvfC0HHmldbd81/B7Ix81KSFe1lwkbl7GnBGG4UfuDew==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.0.0",
        "@jest/types": "^24.9.0",
        "chalk": "^2.0.1",
        "expect": "^24.9.0",
        "jest-diff": "^24.9.0",
        "jest-get-type": "^24.9.0",
        "jest-matcher-utils": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-resolve": "^24.9.0",
        "mkdirp": "^0.5.1",
        "natural-compare": "^1.4.0",
        "pretty-format": "^24.9.0",
        "semver": "^6.2.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "jest-util": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
      "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
      "requires": {
        "@jest/console": "^24.9.0",
        "@jest/fake-timers": "^24.9.0",
        "@jest/source-map": "^24.9.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "callsites": "^3.0.0",
        "chalk": "^2.0.1",
        "graceful-fs": "^4.1.15",
        "is-ci": "^2.0.0",
        "mkdirp": "^0.5.1",
        "slash": "^2.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "callsites": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
          "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
        },
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "jest-validate": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-24.9.0.tgz",
      "integrity": "sha512-HPIt6C5ACwiqSiwi+OfSSHbK8sG7akG8eATl+IPKaeIjtPOeBUd/g3J7DghugzxrGjI93qS/+RPKe1H6PqvhRQ==",
      "requires": {
        "@jest/types": "^24.9.0",
        "camelcase": "^5.3.1",
        "chalk": "^2.0.1",
        "jest-get-type": "^24.9.0",
        "leven": "^3.1.0",
        "pretty-format": "^24.9.0"
      }
    },
    "jest-watcher": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-24.9.0.tgz",
      "integrity": "sha512-+/fLOfKPXXYJDYlks62/4R4GoT+GU1tYZed99JSCOsmzkkF7727RqKrjNAxtfO4YpGv11wybgRvCjR73lK2GZw==",
      "dev": true,
      "requires": {
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/yargs": "^13.0.0",
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.1",
        "jest-util": "^24.9.0",
        "string-length": "^2.0.0"
      }
    },
    "jest-worker": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
      "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
      "requires": {
        "merge-stream": "^2.0.0",
        "supports-color": "^6.1.0"
      },
      "dependencies": {
        "merge-stream": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
        },
        "supports-color": {
          "version": "6.1.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "jetifier": {
      "version": "1.6.4",
      "resolved": "https://registry.npmjs.org/jetifier/-/jetifier-1.6.4.tgz",
      "integrity": "sha512-+f/4OLeqY8RAmXnonI1ffeY1DR8kMNJPhv5WMFehchf7U71cjMQVKkOz1n6asz6kfVoAqKNWJz1A/18i18AcXA=="
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
    },
    "js-yaml": {
      "version": "3.13.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
      "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "jsc-android": {
      "version": "245459.0.0",
      "resolved": "https://registry.npmjs.org/jsc-android/-/jsc-android-245459.0.0.tgz",
      "integrity": "sha512-wkjURqwaB1daNkDi2OYYbsLnIdC/lUM2nPXQKRs5pqEU9chDg435bjvo+LSaHotDENygHQDHe+ntUkkw2gwMtg=="
    },
    "jsdom": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-11.12.0.tgz",
      "integrity": "sha512-y8Px43oyiBM13Zc1z780FrfNLJCXTL40EWlty/LXUtcjykRBNgLlCjWXpfSPBl2iv+N7koQN+dvqszHZgT/Fjw==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "acorn": "^5.5.3",
        "acorn-globals": "^4.1.0",
        "array-equal": "^1.0.0",
        "cssom": ">= 0.3.2 < 0.4.0",
        "cssstyle": "^1.0.0",
        "data-urls": "^1.0.0",
        "domexception": "^1.0.1",
        "escodegen": "^1.9.1",
        "html-encoding-sniffer": "^1.0.2",
        "left-pad": "^1.3.0",
        "nwsapi": "^2.0.7",
        "parse5": "4.0.0",
        "pn": "^1.1.0",
        "request": "^2.87.0",
        "request-promise-native": "^1.0.5",
        "sax": "^1.2.4",
        "symbol-tree": "^3.2.2",
        "tough-cookie": "^2.3.4",
        "w3c-hr-time": "^1.0.1",
        "webidl-conversions": "^4.0.2",
        "whatwg-encoding": "^1.0.3",
        "whatwg-mimetype": "^2.1.0",
        "whatwg-url": "^6.4.1",
        "ws": "^5.2.0",
        "xml-name-validator": "^3.0.0"
      },
      "dependencies": {
        "ws": {
          "version": "5.2.2",
          "resolved": "https://registry.npmjs.org/ws/-/ws-5.2.2.tgz",
          "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
          "dev": true,
          "requires": {
            "async-limiter": "~1.0.0"
          }
        }
      }
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stable-stringify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
      "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
      "requires": {
        "jsonify": "~0.0.0"
      }
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "json5": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.0.tgz",
      "integrity": "sha512-8Mh9h6xViijj36g7Dxi+Y4S6hNGV96vcJZr/SrlHh1LR/pEn/8j/+qIBbs44YKl69Lrfctp4QD+AdWLTMqEZAQ==",
      "requires": {
        "minimist": "^1.2.0"
      }
    },
    "jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "requires": {
        "graceful-fs": "^4.1.6"
      }
    },
    "jsonify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
      "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM="
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "jsx-ast-utils": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-2.2.1.tgz",
      "integrity": "sha512-v3FxCcAf20DayI+uxnCuw795+oOIkVu6EnJ1+kSzhqqTZHNkTZ7B66ZgLp4oLJ/gbA64cI0B7WRoHZMSRdyVRQ==",
      "dev": true,
      "requires": {
        "array-includes": "^3.0.3",
        "object.assign": "^4.1.0"
      }
    },
    "kind-of": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
      "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA=="
    },
    "klaw": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/klaw/-/klaw-1.3.1.tgz",
      "integrity": "sha1-QIhDO0azsbolnXh4XY6W9zugJDk=",
      "requires": {
        "graceful-fs": "^4.1.9"
      }
    },
    "kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
      "dev": true
    },
    "lcid": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-2.0.0.tgz",
      "integrity": "sha512-avPEb8P8EGnwXKClwsNUgryVjllcRqtMYa49NTsbQagYuT1DcXnl1915oxWjoyGrXR6zH/Y0Zc96xWsPcoDKeA==",
      "requires": {
        "invert-kv": "^2.0.0"
      }
    },
    "left-pad": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/left-pad/-/left-pad-1.3.0.tgz",
      "integrity": "sha512-XI5MPzVNApjAyhQzphX8BkmKsKUxD4LdyK24iZeQGinBN9yTQT3bFlCBy/aVx2HrNcqQGsdot8ghrjyrvMCoEA==",
      "dev": true
    },
    "leven": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
    },
    "levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      }
    },
    "load-json-file": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
      "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
      "requires": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "strip-bom": "^3.0.0"
      },
      "dependencies": {
        "parse-json": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
          "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
          "requires": {
            "error-ex": "^1.2.0"
          }
        },
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
        }
      }
    },
    "locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "requires": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      }
    },
    "lodash": {
      "version": "4.17.15",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
      "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A=="
    },
    "lodash.sortby": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
      "dev": true
    },
    "lodash.throttle": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
      "integrity": "sha1-wj6RtxAkKscMN/HhzaknTMOb8vQ="
    },
    "log-symbols": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
      "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
      "requires": {
        "chalk": "^2.0.1"
      }
    },
    "logkitty": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/logkitty/-/logkitty-0.6.1.tgz",
      "integrity": "sha512-cHuXN8qUZuzX/7kB6VyS7kB4xyD24e8gyHXIFNhIv+fjW3P+jEXNUhj0o/7qWJtv7UZpbnPgUqzu/AZQ8RAqxQ==",
      "requires": {
        "ansi-fragments": "^0.2.1",
        "dayjs": "^1.8.15",
        "yargs": "^12.0.5"
      }
    },
    "loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "requires": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      }
    },
    "lru-cache": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
      "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
      "requires": {
        "pseudomap": "^1.0.2",
        "yallist": "^2.1.2"
      }
    },
    "make-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "requires": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      }
    },
    "makeerror": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
      "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
      "requires": {
        "tmpl": "1.0.x"
      }
    },
    "map-age-cleaner": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
      "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
      "requires": {
        "p-defer": "^1.0.0"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8="
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "mem": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/mem/-/mem-4.3.0.tgz",
      "integrity": "sha512-qX2bG48pTqYRVmDB37rn/6PT7LcR8T7oAX3bf99u1Tt1nzxYfxkgqDwUwolPlXweM0XzBOBFzSx4kfp7KP1s/w==",
      "requires": {
        "map-age-cleaner": "^0.1.1",
        "mimic-fn": "^2.0.0",
        "p-is-promise": "^2.0.0"
      }
    },
    "merge-stream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-1.0.1.tgz",
      "integrity": "sha1-QEEgLVCKNCugAXQAjfDCUbjBNeE=",
      "requires": {
        "readable-stream": "^2.0.1"
      }
    },
    "metro": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro/-/metro-0.56.0.tgz",
      "integrity": "sha512-X0QEeoIgbVX9VdhtzNPd8/+WSIaqnQuRaZ1gA1UL2HHlsA23eMsqxP1LUeLtA7DJ1LGGbiJlp6+FdAF/D8IaNg==",
      "requires": {
        "@babel/core": "^7.0.0",
        "@babel/generator": "^7.0.0",
        "@babel/parser": "^7.0.0",
        "@babel/plugin-external-helpers": "^7.0.0",
        "@babel/template": "^7.0.0",
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "absolute-path": "^0.0.0",
        "async": "^2.4.0",
        "babel-preset-fbjs": "^3.1.2",
        "buffer-crc32": "^0.2.13",
        "chalk": "^2.4.1",
        "concat-stream": "^1.6.0",
        "connect": "^3.6.5",
        "debug": "^2.2.0",
        "denodeify": "^1.2.1",
        "eventemitter3": "^3.0.0",
        "fbjs": "^1.0.0",
        "fs-extra": "^1.0.0",
        "graceful-fs": "^4.1.3",
        "image-size": "^0.6.0",
        "invariant": "^2.2.4",
        "jest-haste-map": "^24.7.1",
        "jest-worker": "^24.6.0",
        "json-stable-stringify": "^1.0.1",
        "lodash.throttle": "^4.1.1",
        "merge-stream": "^1.0.1",
        "metro-babel-register": "0.56.0",
        "metro-babel-transformer": "0.56.0",
        "metro-cache": "0.56.0",
        "metro-config": "0.56.0",
        "metro-core": "0.56.0",
        "metro-inspector-proxy": "0.56.0",
        "metro-minify-uglify": "0.56.0",
        "metro-react-native-babel-preset": "0.56.0",
        "metro-resolver": "0.56.0",
        "metro-source-map": "0.56.0",
        "metro-symbolicate": "0.56.0",
        "mime-types": "2.1.11",
        "mkdirp": "^0.5.1",
        "node-fetch": "^2.2.0",
        "nullthrows": "^1.1.0",
        "resolve": "^1.5.0",
        "rimraf": "^2.5.4",
        "serialize-error": "^2.1.0",
        "source-map": "^0.5.6",
        "temp": "0.8.3",
        "throat": "^4.1.0",
        "wordwrap": "^1.0.0",
        "write-file-atomic": "^1.2.0",
        "ws": "^1.1.5",
        "xpipe": "^1.0.5",
        "yargs": "^9.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
        },
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0="
        },
        "cliui": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",
          "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",
          "requires": {
            "string-width": "^1.0.1",
            "strip-ansi": "^3.0.1",
            "wrap-ansi": "^2.0.0"
          },
          "dependencies": {
            "string-width": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
              "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
              "requires": {
                "code-point-at": "^1.0.0",
                "is-fullwidth-code-point": "^1.0.0",
                "strip-ansi": "^3.0.0"
              }
            }
          }
        },
        "cross-spawn": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
          "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
          "requires": {
            "lru-cache": "^4.0.1",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "execa": {
          "version": "0.7.0",
          "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",
          "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",
          "requires": {
            "cross-spawn": "^5.0.1",
            "get-stream": "^3.0.0",
            "is-stream": "^1.1.0",
            "npm-run-path": "^2.0.0",
            "p-finally": "^1.0.0",
            "signal-exit": "^3.0.0",
            "strip-eof": "^1.0.0"
          }
        },
        "fs-extra": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-1.0.0.tgz",
          "integrity": "sha1-zTzl9+fLYUWIP8rjGR6Yd/hYeVA=",
          "requires": {
            "graceful-fs": "^4.1.2",
            "jsonfile": "^2.1.0",
            "klaw": "^1.0.0"
          }
        },
        "get-stream": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
          "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ="
        },
        "invert-kv": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
          "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY="
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "jsonfile": {
          "version": "2.4.0",
          "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-2.4.0.tgz",
          "integrity": "sha1-NzaitCi4e72gzIO1P6PWM6NcKug=",
          "requires": {
            "graceful-fs": "^4.1.6"
          }
        },
        "lcid": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
          "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
          "requires": {
            "invert-kv": "^1.0.0"
          }
        },
        "mem": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/mem/-/mem-1.1.0.tgz",
          "integrity": "sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=",
          "requires": {
            "mimic-fn": "^1.0.0"
          }
        },
        "metro-react-native-babel-preset": {
          "version": "0.56.0",
          "resolved": "https://registry.npmjs.org/metro-react-native-babel-preset/-/metro-react-native-babel-preset-0.56.0.tgz",
          "integrity": "sha512-MAo1fm0dNn6MVZmylaz6k2HC1MINHLTLfE7O3a9Xz3fAtbGbApisp06rBUfK5uUqIJDmAaKgbiT34lHJSIiE6Q==",
          "requires": {
            "@babel/plugin-proposal-class-properties": "^7.0.0",
            "@babel/plugin-proposal-export-default-from": "^7.0.0",
            "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
            "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
            "@babel/plugin-proposal-optional-catch-binding": "^7.0.0",
            "@babel/plugin-proposal-optional-chaining": "^7.0.0",
            "@babel/plugin-syntax-dynamic-import": "^7.0.0",
            "@babel/plugin-syntax-export-default-from": "^7.0.0",
            "@babel/plugin-syntax-flow": "^7.2.0",
            "@babel/plugin-transform-arrow-functions": "^7.0.0",
            "@babel/plugin-transform-block-scoping": "^7.0.0",
            "@babel/plugin-transform-classes": "^7.0.0",
            "@babel/plugin-transform-computed-properties": "^7.0.0",
            "@babel/plugin-transform-destructuring": "^7.0.0",
            "@babel/plugin-transform-exponentiation-operator": "^7.0.0",
            "@babel/plugin-transform-flow-strip-types": "^7.0.0",
            "@babel/plugin-transform-for-of": "^7.0.0",
            "@babel/plugin-transform-function-name": "^7.0.0",
            "@babel/plugin-transform-literals": "^7.0.0",
            "@babel/plugin-transform-modules-commonjs": "^7.0.0",
            "@babel/plugin-transform-object-assign": "^7.0.0",
            "@babel/plugin-transform-parameters": "^7.0.0",
            "@babel/plugin-transform-react-display-name": "^7.0.0",
            "@babel/plugin-transform-react-jsx": "^7.0.0",
            "@babel/plugin-transform-react-jsx-source": "^7.0.0",
            "@babel/plugin-transform-regenerator": "^7.0.0",
            "@babel/plugin-transform-runtime": "^7.0.0",
            "@babel/plugin-transform-shorthand-properties": "^7.0.0",
            "@babel/plugin-transform-spread": "^7.0.0",
            "@babel/plugin-transform-sticky-regex": "^7.0.0",
            "@babel/plugin-transform-template-literals": "^7.0.0",
            "@babel/plugin-transform-typescript": "^7.0.0",
            "@babel/plugin-transform-unicode-regex": "^7.0.0",
            "@babel/template": "^7.0.0",
            "react-refresh": "^0.4.0"
          }
        },
        "mime-db": {
          "version": "1.23.0",
          "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.23.0.tgz",
          "integrity": "sha1-oxtAcK2uon1zLqMzdApk0OyaZlk="
        },
        "mime-types": {
          "version": "2.1.11",
          "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.11.tgz",
          "integrity": "sha1-wlnEcb2oCKhdbNGTtDCl+uRHOzw=",
          "requires": {
            "mime-db": "~1.23.0"
          }
        },
        "mimic-fn": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
          "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
        },
        "os-locale": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz",
          "integrity": "sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==",
          "requires": {
            "execa": "^0.7.0",
            "lcid": "^1.0.0",
            "mem": "^1.1.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "y18n": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.1.tgz",
          "integrity": "sha1-bRX7qITAhnnA136I53WegR4H+kE="
        },
        "yargs": {
          "version": "9.0.1",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-9.0.1.tgz",
          "integrity": "sha1-UqzCP+7Kw0BCB47njAwAf1CF20w=",
          "requires": {
            "camelcase": "^4.1.0",
            "cliui": "^3.2.0",
            "decamelize": "^1.1.1",
            "get-caller-file": "^1.0.1",
            "os-locale": "^2.0.0",
            "read-pkg-up": "^2.0.0",
            "require-directory": "^2.1.1",
            "require-main-filename": "^1.0.1",
            "set-blocking": "^2.0.0",
            "string-width": "^2.0.0",
            "which-module": "^2.0.0",
            "y18n": "^3.2.1",
            "yargs-parser": "^7.0.0"
          }
        },
        "yargs-parser": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-7.0.0.tgz",
          "integrity": "sha1-jQrELxbqVd69MyyvTEA4s+P139k=",
          "requires": {
            "camelcase": "^4.1.0"
          }
        }
      }
    },
    "metro-babel-register": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-babel-register/-/metro-babel-register-0.56.0.tgz",
      "integrity": "sha512-/jkfdFpmmyG8Y1ik01EEgqTBy6Y89exZmJi58ej/bVK7u0hhA7mrcqusOeVRlaH+rboecPG52ouuDxcnNSXwzQ==",
      "requires": {
        "@babel/core": "^7.0.0",
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
        "@babel/plugin-proposal-optional-catch-binding": "^7.0.0",
        "@babel/plugin-proposal-optional-chaining": "^7.0.0",
        "@babel/plugin-transform-async-to-generator": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/register": "^7.0.0",
        "core-js": "^2.2.2",
        "escape-string-regexp": "^1.0.5"
      }
    },
    "metro-babel-transformer": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-babel-transformer/-/metro-babel-transformer-0.56.0.tgz",
      "integrity": "sha512-8w/NpcKovmzkY4/++zX5v+OLOcBPXC9iygNI0ZdexA9U5/ncAY3U1VaF2ScFKzhrpkb8AJioYYioAgrRMLYStg==",
      "requires": {
        "@babel/core": "^7.0.0",
        "metro-source-map": "0.56.0"
      }
    },
    "metro-babel7-plugin-react-transform": {
      "version": "0.51.1",
      "resolved": "https://registry.npmjs.org/metro-babel7-plugin-react-transform/-/metro-babel7-plugin-react-transform-0.51.1.tgz",
      "integrity": "sha512-wzn4X9KgmAMZ7Bi6v9KxA7dw+AHGL0RODPxU5NDJ3A6d0yERvzfZ3qkzWhz8jbFkVBK12cu5DTho3HBazKQDOw==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.0.0"
      }
    },
    "metro-cache": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-cache/-/metro-cache-0.56.0.tgz",
      "integrity": "sha512-fjfdHGAog3SMEpWF6QE8lTeYUMMpvGYHBfc7DYkDvkEwvEympFzn6dWg7uOeh90F1kjUABtAgkan0SC4CWWF/g==",
      "requires": {
        "jest-serializer": "^24.4.0",
        "metro-core": "0.56.0",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.5.4"
      }
    },
    "metro-config": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-config/-/metro-config-0.56.0.tgz",
      "integrity": "sha512-R7n41V9pkSeQe/7MdMoM1XiWZGNDHVAKKcR3QPoSdVhYFJkUbV2UsfJDBTohmTML07BkAQ1Bys5dGrQZfgeeNQ==",
      "requires": {
        "cosmiconfig": "^5.0.5",
        "jest-validate": "^24.7.0",
        "metro": "0.56.0",
        "metro-cache": "0.56.0",
        "metro-core": "0.56.0",
        "pretty-format": "^24.7.0"
      }
    },
    "metro-core": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-core/-/metro-core-0.56.0.tgz",
      "integrity": "sha512-R1RS1ZlBG2sjucjhAbRPb6FDB668as3/FuiARJGEsYXt3kpMz2thOpdgWG86sDygSM/U4qLhU3hQf1FU+NUP2w==",
      "requires": {
        "jest-haste-map": "^24.7.1",
        "lodash.throttle": "^4.1.1",
        "metro-resolver": "0.56.0",
        "wordwrap": "^1.0.0"
      }
    },
    "metro-inspector-proxy": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-inspector-proxy/-/metro-inspector-proxy-0.56.0.tgz",
      "integrity": "sha512-p+m6rjB749i3P2N3B9BRy+pAkBnenb+ymFJR8CToLxQdbCk3iRwj1hlf4F2OXoM26eZZdm0AC+Z/zfiOCuePJA==",
      "requires": {
        "connect": "^3.6.5",
        "debug": "^2.2.0",
        "rxjs": "^5.4.3",
        "ws": "^1.1.5",
        "yargs": "^9.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
        },
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0="
        },
        "cliui": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",
          "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",
          "requires": {
            "string-width": "^1.0.1",
            "strip-ansi": "^3.0.1",
            "wrap-ansi": "^2.0.0"
          },
          "dependencies": {
            "string-width": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
              "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
              "requires": {
                "code-point-at": "^1.0.0",
                "is-fullwidth-code-point": "^1.0.0",
                "strip-ansi": "^3.0.0"
              }
            }
          }
        },
        "cross-spawn": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
          "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
          "requires": {
            "lru-cache": "^4.0.1",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "execa": {
          "version": "0.7.0",
          "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",
          "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",
          "requires": {
            "cross-spawn": "^5.0.1",
            "get-stream": "^3.0.0",
            "is-stream": "^1.1.0",
            "npm-run-path": "^2.0.0",
            "p-finally": "^1.0.0",
            "signal-exit": "^3.0.0",
            "strip-eof": "^1.0.0"
          }
        },
        "get-stream": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
          "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ="
        },
        "invert-kv": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
          "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY="
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "lcid": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
          "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
          "requires": {
            "invert-kv": "^1.0.0"
          }
        },
        "mem": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/mem/-/mem-1.1.0.tgz",
          "integrity": "sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=",
          "requires": {
            "mimic-fn": "^1.0.0"
          }
        },
        "mimic-fn": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
          "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
        },
        "os-locale": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz",
          "integrity": "sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==",
          "requires": {
            "execa": "^0.7.0",
            "lcid": "^1.0.0",
            "mem": "^1.1.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "y18n": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.1.tgz",
          "integrity": "sha1-bRX7qITAhnnA136I53WegR4H+kE="
        },
        "yargs": {
          "version": "9.0.1",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-9.0.1.tgz",
          "integrity": "sha1-UqzCP+7Kw0BCB47njAwAf1CF20w=",
          "requires": {
            "camelcase": "^4.1.0",
            "cliui": "^3.2.0",
            "decamelize": "^1.1.1",
            "get-caller-file": "^1.0.1",
            "os-locale": "^2.0.0",
            "read-pkg-up": "^2.0.0",
            "require-directory": "^2.1.1",
            "require-main-filename": "^1.0.1",
            "set-blocking": "^2.0.0",
            "string-width": "^2.0.0",
            "which-module": "^2.0.0",
            "y18n": "^3.2.1",
            "yargs-parser": "^7.0.0"
          }
        },
        "yargs-parser": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-7.0.0.tgz",
          "integrity": "sha1-jQrELxbqVd69MyyvTEA4s+P139k=",
          "requires": {
            "camelcase": "^4.1.0"
          }
        }
      }
    },
    "metro-minify-uglify": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-minify-uglify/-/metro-minify-uglify-0.56.0.tgz",
      "integrity": "sha512-0u2ClTDuaxtWDpAZpnGUEvxJ/X3PzaaSQxPpsGSnBa0g+fqV8xyz8BGtFieQ+Ukuiw7SRwTkUQChkSVi+PAOdA==",
      "requires": {
        "uglify-es": "^3.1.9"
      }
    },
    "metro-react-native-babel-preset": {
      "version": "0.51.1",
      "resolved": "https://registry.npmjs.org/metro-react-native-babel-preset/-/metro-react-native-babel-preset-0.51.1.tgz",
      "integrity": "sha512-e9tsYDFhU70gar0jQWcZXRPJVCv4k7tEs6Pm74wXO2OO/T1MEumbvniDIGwGG8bG8RUnYdHhjcaiub2Vc5BRWw==",
      "dev": true,
      "requires": {
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-export-default-from": "^7.0.0",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
        "@babel/plugin-proposal-optional-catch-binding": "^7.0.0",
        "@babel/plugin-proposal-optional-chaining": "^7.0.0",
        "@babel/plugin-syntax-dynamic-import": "^7.0.0",
        "@babel/plugin-syntax-export-default-from": "^7.0.0",
        "@babel/plugin-transform-arrow-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoping": "^7.0.0",
        "@babel/plugin-transform-classes": "^7.0.0",
        "@babel/plugin-transform-computed-properties": "^7.0.0",
        "@babel/plugin-transform-destructuring": "^7.0.0",
        "@babel/plugin-transform-exponentiation-operator": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-for-of": "^7.0.0",
        "@babel/plugin-transform-function-name": "^7.0.0",
        "@babel/plugin-transform-literals": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/plugin-transform-object-assign": "^7.0.0",
        "@babel/plugin-transform-parameters": "^7.0.0",
        "@babel/plugin-transform-react-display-name": "^7.0.0",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/plugin-transform-react-jsx-source": "^7.0.0",
        "@babel/plugin-transform-regenerator": "^7.0.0",
        "@babel/plugin-transform-runtime": "^7.0.0",
        "@babel/plugin-transform-shorthand-properties": "^7.0.0",
        "@babel/plugin-transform-spread": "^7.0.0",
        "@babel/plugin-transform-sticky-regex": "^7.0.0",
        "@babel/plugin-transform-template-literals": "^7.0.0",
        "@babel/plugin-transform-typescript": "^7.0.0",
        "@babel/plugin-transform-unicode-regex": "^7.0.0",
        "@babel/template": "^7.0.0",
        "metro-babel7-plugin-react-transform": "0.51.1",
        "react-transform-hmr": "^1.0.4"
      }
    },
    "metro-react-native-babel-transformer": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-react-native-babel-transformer/-/metro-react-native-babel-transformer-0.56.0.tgz",
      "integrity": "sha512-9eJ6kzizy80KlqNryg9TjlHdA4PZPWw0TV8Ih7H6RmYmuMzac5gjIW9FUrXsVWI56kQf+L5SdD/dCOWDqez/lQ==",
      "requires": {
        "@babel/core": "^7.0.0",
        "babel-preset-fbjs": "^3.1.2",
        "metro-babel-transformer": "0.56.0",
        "metro-react-native-babel-preset": "0.56.0",
        "metro-source-map": "0.56.0"
      },
      "dependencies": {
        "metro-react-native-babel-preset": {
          "version": "0.56.0",
          "resolved": "https://registry.npmjs.org/metro-react-native-babel-preset/-/metro-react-native-babel-preset-0.56.0.tgz",
          "integrity": "sha512-MAo1fm0dNn6MVZmylaz6k2HC1MINHLTLfE7O3a9Xz3fAtbGbApisp06rBUfK5uUqIJDmAaKgbiT34lHJSIiE6Q==",
          "requires": {
            "@babel/plugin-proposal-class-properties": "^7.0.0",
            "@babel/plugin-proposal-export-default-from": "^7.0.0",
            "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
            "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
            "@babel/plugin-proposal-optional-catch-binding": "^7.0.0",
            "@babel/plugin-proposal-optional-chaining": "^7.0.0",
            "@babel/plugin-syntax-dynamic-import": "^7.0.0",
            "@babel/plugin-syntax-export-default-from": "^7.0.0",
            "@babel/plugin-syntax-flow": "^7.2.0",
            "@babel/plugin-transform-arrow-functions": "^7.0.0",
            "@babel/plugin-transform-block-scoping": "^7.0.0",
            "@babel/plugin-transform-classes": "^7.0.0",
            "@babel/plugin-transform-computed-properties": "^7.0.0",
            "@babel/plugin-transform-destructuring": "^7.0.0",
            "@babel/plugin-transform-exponentiation-operator": "^7.0.0",
            "@babel/plugin-transform-flow-strip-types": "^7.0.0",
            "@babel/plugin-transform-for-of": "^7.0.0",
            "@babel/plugin-transform-function-name": "^7.0.0",
            "@babel/plugin-transform-literals": "^7.0.0",
            "@babel/plugin-transform-modules-commonjs": "^7.0.0",
            "@babel/plugin-transform-object-assign": "^7.0.0",
            "@babel/plugin-transform-parameters": "^7.0.0",
            "@babel/plugin-transform-react-display-name": "^7.0.0",
            "@babel/plugin-transform-react-jsx": "^7.0.0",
            "@babel/plugin-transform-react-jsx-source": "^7.0.0",
            "@babel/plugin-transform-regenerator": "^7.0.0",
            "@babel/plugin-transform-runtime": "^7.0.0",
            "@babel/plugin-transform-shorthand-properties": "^7.0.0",
            "@babel/plugin-transform-spread": "^7.0.0",
            "@babel/plugin-transform-sticky-regex": "^7.0.0",
            "@babel/plugin-transform-template-literals": "^7.0.0",
            "@babel/plugin-transform-typescript": "^7.0.0",
            "@babel/plugin-transform-unicode-regex": "^7.0.0",
            "@babel/template": "^7.0.0",
            "react-refresh": "^0.4.0"
          }
        }
      }
    },
    "metro-resolver": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-resolver/-/metro-resolver-0.56.0.tgz",
      "integrity": "sha512-thI31ZLnRr6l8/uIQ3pemMOp0+5btvj8ntv6qcY0scqqTRxJvJL4OQMM8yNbq8t8kPH5/1U0N+PvvQQ5g2QeIA==",
      "requires": {
        "absolute-path": "^0.0.0"
      }
    },
    "metro-source-map": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-source-map/-/metro-source-map-0.56.0.tgz",
      "integrity": "sha512-W3c91L+CtbQTRxOrcVteCi5XlSXh+L0Zy85YBwm+FkWTKfrYjacr/yW1S9/LutpLgWE0W0VBeQeY++aRHwpx0g==",
      "requires": {
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "invariant": "^2.2.4",
        "metro-symbolicate": "0.56.0",
        "ob1": "0.56.0",
        "source-map": "^0.5.6",
        "vlq": "^1.0.0"
      }
    },
    "metro-symbolicate": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/metro-symbolicate/-/metro-symbolicate-0.56.0.tgz",
      "integrity": "sha512-5gJtwdSS0eYlTYB7PXatohBknz1sWUTfMBhwjn6zbgoyR6Apkpl2t2TfZxwfDTauhcEV1gRLmuodrVENs01r8g==",
      "requires": {
        "invariant": "^2.2.4",
        "metro-source-map": "0.56.0",
        "source-map": "^0.5.6",
        "through2": "^2.0.1",
        "vlq": "^1.0.0"
      }
    },
    "micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      }
    },
    "mime": {
      "version": "2.4.4",
      "resolved": "https://registry.npmjs.org/mime/-/mime-2.4.4.tgz",
      "integrity": "sha512-LRxmNwziLPT828z+4YkNzloCFC2YM4wrB99k+AV5ZbEyfGNWfG8SO1FUXLmLDBSo89NrJZ4DIWeLjy1CHGhMGA=="
    },
    "mime-db": {
      "version": "1.40.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.40.0.tgz",
      "integrity": "sha512-jYdeOMPy9vnxEqFRRo6ZvTZ8d9oPb+k18PKoYNYUe2stVEBPPwsln/qWzdbmaIvnhZ9v2P+CuecK+fpUfsV2mA=="
    },
    "mime-types": {
      "version": "2.1.24",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.24.tgz",
      "integrity": "sha512-WaFHS3MCl5fapm3oLxU4eYDw77IQM2ACcxQ9RIxfaC3ooc6PFuBMGZZsYpvoXS5D5QTWPieo1jjLdAm3TBP3cQ==",
      "requires": {
        "mime-db": "1.40.0"
      }
    },
    "mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
    },
    "min-document": {
      "version": "2.19.0",
      "resolved": "https://registry.npmjs.org/min-document/-/min-document-2.19.0.tgz",
      "integrity": "sha1-e9KC4/WELtKVu3SM3Z8f+iyCRoU=",
      "dev": true,
      "requires": {
        "dom-walk": "^0.1.0"
      }
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
      "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ="
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "mkdirp": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
      "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
      "requires": {
        "minimist": "0.0.8"
      },
      "dependencies": {
        "minimist": {
          "version": "0.0.8",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
          "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
        }
      }
    },
    "morgan": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.9.1.tgz",
      "integrity": "sha512-HQStPIV4y3afTiCYVxirakhlCfGkI161c76kKFca7Fk1JusM//Qeo1ej2XaMniiNeaZklMVrh3vTtIzpzwbpmA==",
      "requires": {
        "basic-auth": "~2.0.0",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "on-finished": "~2.3.0",
        "on-headers": "~1.0.1"
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s="
    },
    "nan": {
      "version": "2.14.0",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.0.tgz",
      "integrity": "sha512-INOFj37C7k3AfaNTtX8RhsTw7qRy7eLET14cROi9+5HAVbbHuIWUHEauBv5qT4Av2tWasiTY1Jw6puUNqRJXQg==",
      "optional": true
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      }
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
    },
    "neo-async": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.1.tgz",
      "integrity": "sha512-iyam8fBuCUpWeKPGpaNMetEocMt364qkCsfL9JuhjXX6dRnguRVOfk2GZaDpPjcOKiiXCPINZC1GczQ7iTq3Zw==",
      "dev": true
    },
    "nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ=="
    },
    "node-fetch": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.0.tgz",
      "integrity": "sha512-8dG4H5ujfvFiqDmVu9fQ5bOHUC15JMjMY/Zumv26oOvvVJjM67KF8koCWIabKQ1GJIa9r2mMZscBq/TbdOcmNA=="
    },
    "node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
    },
    "node-modules-regexp": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
      "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA="
    },
    "node-notifier": {
      "version": "5.4.3",
      "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.4.3.tgz",
      "integrity": "sha512-M4UBGcs4jeOK9CjTsYwkvH6/MzuUmGCyTW+kCY7uO+1ZVr0+FHGdPdIf5CCLqAaxnRrWidyoQlNkMIIVwbKB8Q==",
      "requires": {
        "growly": "^1.3.0",
        "is-wsl": "^1.1.0",
        "semver": "^5.5.0",
        "shellwords": "^0.1.1",
        "which": "^1.3.0"
      }
    },
    "normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "requires": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "requires": {
        "remove-trailing-separator": "^1.0.1"
      }
    },
    "npm-run-path": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "requires": {
        "path-key": "^2.0.0"
      }
    },
    "nullthrows": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/nullthrows/-/nullthrows-1.1.1.tgz",
      "integrity": "sha512-2vPPEi+Z7WqML2jZYddDIfy5Dqb0r2fze2zTxNNknZaFpVHU3mFB3R+DWeJWGVx0ecvttSGlJTI+WG+8Z4cDWw=="
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
    },
    "nwsapi": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.1.4.tgz",
      "integrity": "sha512-iGfd9Y6SFdTNldEy2L0GUhcarIutFmk+MPWIn9dmj8NMIup03G08uUF2KGbbmv/Ux4RT0VZJoP/sVbWA6d/VIw==",
      "dev": true
    },
    "oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true
    },
    "ob1": {
      "version": "0.56.0",
      "resolved": "https://registry.npmjs.org/ob1/-/ob1-0.56.0.tgz",
      "integrity": "sha512-3rvepvXPw+OIkcut4MaRYIoy4thTWvWhTK+Hg4+y9fOBWVF9acpBvtm2NSbH9Vw9UBG/9v+T5euwPxUSUIDPWw=="
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "object-inspect": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.6.0.tgz",
      "integrity": "sha512-GJzfBZ6DgDAmnuaM3104jR4s1Myxr3Y3zfIyN4z3UdqN69oSRacNK8UhnobDdC+7J2AHCjGwxQubNJfE70SXXQ==",
      "dev": true
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "requires": {
        "isobject": "^3.0.0"
      }
    },
    "object.assign": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.0.tgz",
      "integrity": "sha512-exHJeq6kBKj58mqGyTQ9DFvrZC/eR6OwxzoM9YRoGBqrXYonaFyGiFMuc9VZrXf7DarreEwMpurG3dd+CNyW5w==",
      "requires": {
        "define-properties": "^1.1.2",
        "function-bind": "^1.1.1",
        "has-symbols": "^1.0.0",
        "object-keys": "^1.0.11"
      }
    },
    "object.fromentries": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.0.tgz",
      "integrity": "sha512-9iLiI6H083uiqUuvzyY6qrlmc/Gz8hLQFOcb/Ri/0xXFkSNS3ctV+CbE6yM2+AnkYfOB3dGjdzC0wrMLIhQICA==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.2",
        "es-abstract": "^1.11.0",
        "function-bind": "^1.1.1",
        "has": "^1.0.1"
      }
    },
    "object.getownpropertydescriptors": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.0.3.tgz",
      "integrity": "sha1-h1jIRvW0B62rDyNuCYbxSwUcqhY=",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.2",
        "es-abstract": "^1.5.1"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "requires": {
        "mimic-fn": "^1.0.0"
      },
      "dependencies": {
        "mimic-fn": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
          "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
        }
      }
    },
    "open": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/open/-/open-6.4.0.tgz",
      "integrity": "sha512-IFenVPgF70fSm1keSd2iDBIDIBZkroLeuffXq+wKTzTJlBpesFWojV9lb8mzOfaAzM1sr7HQHuO0vtV0zYekGg==",
      "requires": {
        "is-wsl": "^1.1.0"
      }
    },
    "optimist": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
      "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",
      "dev": true,
      "requires": {
        "minimist": "~0.0.1",
        "wordwrap": "~0.0.2"
      },
      "dependencies": {
        "minimist": {
          "version": "0.0.10",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz",
          "integrity": "sha1-3j+YVD2/lggr5IrRoMfNqDYwHc8=",
          "dev": true
        },
        "wordwrap": {
          "version": "0.0.3",
          "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
          "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc=",
          "dev": true
        }
      }
    },
    "optionator": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.2.tgz",
      "integrity": "sha1-NkxeQJ0/TWMB1sC0wFu6UBgK62Q=",
      "dev": true,
      "requires": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.4",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "wordwrap": "~1.0.0"
      }
    },
    "options": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/options/-/options-0.0.6.tgz",
      "integrity": "sha1-7CLTEoBrtT5zF3Pnza788cZDEo8="
    },
    "ora": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-3.4.0.tgz",
      "integrity": "sha512-eNwHudNbO1folBP3JsZ19v9azXWtQZjICdr3Q0TDPIaeBQ3mXLrh54wM+er0+hSp+dWKf+Z8KM58CYzEyIYxYg==",
      "requires": {
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-spinners": "^2.0.0",
        "log-symbols": "^2.2.0",
        "strip-ansi": "^5.2.0",
        "wcwidth": "^1.0.1"
      }
    },
    "os-locale": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-3.1.0.tgz",
      "integrity": "sha512-Z8l3R4wYWM40/52Z+S265okfFj8Kt2cC2MKY+xNi3kFs+XGI7WXu/I309QQQYbRW4ijiZ+yxs9pqEhJh0DqW3Q==",
      "requires": {
        "execa": "^1.0.0",
        "lcid": "^2.0.0",
        "mem": "^4.0.0"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
    },
    "p-defer": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
      "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww="
    },
    "p-each-series": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-each-series/-/p-each-series-1.0.0.tgz",
      "integrity": "sha1-kw89Et0fUOdDRFeiLNbwSsatf3E=",
      "dev": true,
      "requires": {
        "p-reduce": "^1.0.0"
      }
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
    },
    "p-is-promise": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-2.1.0.tgz",
      "integrity": "sha512-Y3W0wlRPK8ZMRbNq97l4M5otioeA5lm1z7bkNkxCka8HSPjR0xRWmpCmc9utiaLP9Jb1eD8BgeIxTW4AIF45Pg=="
    },
    "p-limit": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.1.tgz",
      "integrity": "sha512-85Tk+90UCVWvbDavCLKPOLC9vvY8OwEX/RtKF+/1OADJMVlFfEHOiMTPVyxg7mk/dKa+ipdHm0OUkTvCpMTuwg==",
      "requires": {
        "p-try": "^2.0.0"
      }
    },
    "p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "requires": {
        "p-limit": "^2.0.0"
      }
    },
    "p-reduce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-reduce/-/p-reduce-1.0.0.tgz",
      "integrity": "sha1-GMKw3ZNqRpClKfgjH1ig/bakffo=",
      "dev": true
    },
    "p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
    },
    "parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
      "requires": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      }
    },
    "parse-node-version": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",
      "integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA=="
    },
    "parse5": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-4.0.0.tgz",
      "integrity": "sha512-VrZ7eOd3T1Fk4XWNXMgiGBK/z0MG48BWG2uQNU4I72fkQuKUTZpl+u9k+CxEG0twMVzSmXEEz12z5Fnw1jIQFA==",
      "dev": true
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ="
    },
    "path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
    },
    "path-parse": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
    },
    "path-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
      "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
      "requires": {
        "pify": "^2.0.0"
      },
      "dependencies": {
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
        }
      }
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
    },
    "pirates": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
      "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
      "requires": {
        "node-modules-regexp": "^1.0.0"
      }
    },
    "pkg-dir": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
      "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
      "requires": {
        "find-up": "^3.0.0"
      }
    },
    "plist": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/plist/-/plist-3.0.1.tgz",
      "integrity": "sha512-GpgvHHocGRyQm74b6FWEZZVRroHKE1I0/BTjAmySaohK+cUn+hZpbqXkc3KWgW3gQYkqcQej35FohcT0FRlkRQ==",
      "requires": {
        "base64-js": "^1.2.3",
        "xmlbuilder": "^9.0.7",
        "xmldom": "0.1.x"
      }
    },
    "plugin-error": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/plugin-error/-/plugin-error-0.1.2.tgz",
      "integrity": "sha1-O5uzM1zPAPQl4HQ34ZJ2ln2kes4=",
      "requires": {
        "ansi-cyan": "^0.1.1",
        "ansi-red": "^0.1.1",
        "arr-diff": "^1.0.1",
        "arr-union": "^2.0.1",
        "extend-shallow": "^1.1.2"
      },
      "dependencies": {
        "arr-diff": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-1.1.0.tgz",
          "integrity": "sha1-aHwydYFjWI/vfeezb6vklesaOZo=",
          "requires": {
            "arr-flatten": "^1.0.1",
            "array-slice": "^0.2.3"
          }
        },
        "arr-union": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-2.1.0.tgz",
          "integrity": "sha1-IPnqtexw9cfSFbEHexw5Fh0pLH0="
        },
        "extend-shallow": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-1.1.4.tgz",
          "integrity": "sha1-Gda/lN/AnXa6cR85uHLSH/TdkHE=",
          "requires": {
            "kind-of": "^1.1.0"
          }
        },
        "kind-of": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-1.1.0.tgz",
          "integrity": "sha1-FAo9LUGjbS78+pN3tiwk+ElaXEQ="
        }
      }
    },
    "pn": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
      "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA==",
      "dev": true
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs="
    },
    "prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true
    },
    "prettier": {
      "version": "1.16.4",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-1.16.4.tgz",
      "integrity": "sha512-ZzWuos7TI5CKUeQAtFd6Zhm2s6EpAD/ZLApIhsF9pRvRtM1RFo61dM/4MSRUA0SuLugA/zgrZD8m0BaY46Og7g==",
      "dev": true
    },
    "pretty-format": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
      "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
      "requires": {
        "@jest/types": "^24.9.0",
        "ansi-regex": "^4.0.0",
        "ansi-styles": "^3.2.0",
        "react-is": "^16.8.4"
      }
    },
    "private": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
      "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg=="
    },
    "process": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
      "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
      "dev": true
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "promise": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
      "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
      "requires": {
        "asap": "~2.0.3"
      }
    },
    "prompts": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.2.1.tgz",
      "integrity": "sha512-VObPvJiWPhpZI6C5m60XOzTfnYg/xc/an+r9VYymj9WJW3B/DIH+REzjpAACPf8brwPeP+7vz3bIim3S+AaMjw==",
      "dev": true,
      "requires": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.3"
      }
    },
    "prop-types": {
      "version": "15.7.2",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
      "integrity": "sha512-8QQikdH7//R2vurIJSutZ1smHYTcLpRWEOlHnzcWHmBYrOGUysKwSsrC89BCiFj3CbrfJ/nXFdJepOVrY1GCHQ==",
      "requires": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.8.1"
      }
    },
    "pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM="
    },
    "psl": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.4.0.tgz",
      "integrity": "sha512-HZzqCGPecFLyoRj5HLfuDSKYTJkAfB5thKBIkRHtGjWwY7p1dAyveIbXIq4tO0KYfDF2tHqPUgY9SDnGm00uFw==",
      "dev": true
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true
    },
    "qs": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
      "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
      "dev": true
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "react": {
      "version": "16.9.0",
      "resolved": "https://registry.npmjs.org/react/-/react-16.9.0.tgz",
      "integrity": "sha512-+7LQnFBwkiw+BobzOF6N//BdoNw0ouwmSJTEm9cglOOmsg/TMiFHZLe2sEoN5M7LgJTj9oHH0gxklfnQe66S1w==",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1",
        "prop-types": "^15.6.2"
      }
    },
    "react-deep-force-update": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/react-deep-force-update/-/react-deep-force-update-1.1.2.tgz",
      "integrity": "sha512-WUSQJ4P/wWcusaH+zZmbECOk7H5N2pOIl0vzheeornkIMhu+qrNdGFm0bDZLCb0hSF0jf/kH1SgkNGfBdTc4wA==",
      "dev": true
    },
    "react-devtools-core": {
      "version": "3.6.3",
      "resolved": "https://registry.npmjs.org/react-devtools-core/-/react-devtools-core-3.6.3.tgz",
      "integrity": "sha512-+P+eFy/yo8Z/UH9J0DqHZuUM5+RI2wl249TNvMx3J2jpUomLQa4Zxl56GEotGfw3PIP1eI+hVf1s53FlUONStQ==",
      "requires": {
        "shell-quote": "^1.6.1",
        "ws": "^3.3.1"
      },
      "dependencies": {
        "ultron": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/ultron/-/ultron-1.1.1.tgz",
          "integrity": "sha512-UIEXBNeYmKptWH6z8ZnqTeS8fV74zG0/eRU9VGkpzz+LIJNs8W/zM/L+7ctCkRrgbNnnR0xxw4bKOr0cW0N0Og=="
        },
        "ws": {
          "version": "3.3.3",
          "resolved": "https://registry.npmjs.org/ws/-/ws-3.3.3.tgz",
          "integrity": "sha512-nnWLa/NwZSt4KQJu51MYlCcSQ5g7INpOrOMt4XV8j4dqTXdmlUmSHQ8/oLC069ckre0fRsgfvsKwbTdtKLCDkA==",
          "requires": {
            "async-limiter": "~1.0.0",
            "safe-buffer": "~5.1.0",
            "ultron": "~1.1.0"
          }
        }
      }
    },
    "react-is": {
      "version": "16.10.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.10.1.tgz",
      "integrity": "sha512-BXUMf9sIOPXXZWqr7+c5SeOKJykyVr2u0UDzEf4LNGc6taGkQe1A9DFD07umCIXz45RLr9oAAwZbAJ0Pkknfaw=="
    },
    "react-native": {
      "version": "0.61.1",
      "resolved": "https://registry.npmjs.org/react-native/-/react-native-0.61.1.tgz",
      "integrity": "sha512-FjOhAgzjrPr2BjBITmCY+SHzWxfP/bv5ve3oN6ItoIPsVPjJG2QZE8yeByVdI4TzaZrGHU4Ag7/7hX4j39cj2Q==",
      "requires": {
        "@babel/runtime": "^7.0.0",
        "@react-native-community/cli": "^3.0.0-alpha.1",
        "@react-native-community/cli-platform-android": "^3.0.0-alpha.1",
        "@react-native-community/cli-platform-ios": "^3.0.0-alpha.1",
        "abort-controller": "^3.0.0",
        "art": "^0.10.0",
        "base64-js": "^1.1.2",
        "connect": "^3.6.5",
        "create-react-class": "^15.6.3",
        "escape-string-regexp": "^1.0.5",
        "event-target-shim": "^5.0.1",
        "fbjs": "^1.0.0",
        "fbjs-scripts": "^1.1.0",
        "hermes-engine": "^0.2.1",
        "invariant": "^2.2.4",
        "jsc-android": "^245459.0.0",
        "metro-babel-register": "^0.56.0",
        "metro-react-native-babel-transformer": "^0.56.0",
        "metro-source-map": "^0.56.0",
        "nullthrows": "^1.1.0",
        "pretty-format": "^24.7.0",
        "promise": "^7.1.1",
        "prop-types": "^15.7.2",
        "react-devtools-core": "^3.6.3",
        "react-refresh": "^0.4.0",
        "regenerator-runtime": "^0.13.2",
        "scheduler": "0.15.0",
        "stacktrace-parser": "^0.1.3",
        "whatwg-fetch": "^3.0.0"
      },
      "dependencies": {
        "@react-native-community/cli": {
          "version": "3.0.0-alpha.2",
          "resolved": "https://registry.npmjs.org/@react-native-community/cli/-/cli-3.0.0-alpha.2.tgz",
          "integrity": "sha512-bPl+Y3qX63QUTBnYYk2IAbNYjQnBeBPJz5jCBcxnOi8CWx4XQz7tN7Hh+vtqlwGoLQWs1hn7tMVh15sNmLYigw==",
          "requires": {
            "@hapi/joi": "^15.0.3",
            "@react-native-community/cli-platform-android": "^3.0.0-alpha.2",
            "@react-native-community/cli-platform-ios": "^3.0.0-alpha.2",
            "@react-native-community/cli-tools": "^2.8.3",
            "chalk": "^2.4.2",
            "commander": "^2.19.0",
            "compression": "^1.7.1",
            "connect": "^3.6.5",
            "cosmiconfig": "^5.1.0",
            "deepmerge": "^3.2.0",
            "envinfo": "^7.1.0",
            "errorhandler": "^1.5.0",
            "execa": "^1.0.0",
            "fs-extra": "^7.0.1",
            "glob": "^7.1.1",
            "graceful-fs": "^4.1.3",
            "inquirer": "^3.0.6",
            "lodash": "^4.17.5",
            "metro": "^0.56.0",
            "metro-config": "^0.56.0",
            "metro-core": "^0.56.0",
            "metro-react-native-babel-transformer": "^0.56.0",
            "minimist": "^1.2.0",
            "mkdirp": "^0.5.1",
            "morgan": "^1.9.0",
            "node-notifier": "^5.2.1",
            "open": "^6.2.0",
            "ora": "^3.4.0",
            "plist": "^3.0.0",
            "semver": "^5.0.3",
            "serve-static": "^1.13.1",
            "shell-quote": "1.6.1",
            "ws": "^1.1.0"
          }
        },
        "scheduler": {
          "version": "0.15.0",
          "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.15.0.tgz",
          "integrity": "sha512-xAefmSfN6jqAa7Kuq7LIJY0bwAPG3xlCj0HMEBQk1lxYiDKZscY2xJ5U/61ZTrYbmNQbXa+gc7czPkVo11tnCg==",
          "requires": {
            "loose-envify": "^1.1.0",
            "object-assign": "^4.1.1"
          }
        }
      }
    },
    "react-proxy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/react-proxy/-/react-proxy-1.1.8.tgz",
      "integrity": "sha1-nb/Z2SdSjDqp9ETkVYw3gwq4wmo=",
      "dev": true,
      "requires": {
        "lodash": "^4.6.1",
        "react-deep-force-update": "^1.0.0"
      }
    },
    "react-refresh": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.4.2.tgz",
      "integrity": "sha512-kv5QlFFSZWo7OlJFNYbxRtY66JImuP2LcrFgyJfQaf85gSP+byzG21UbDQEYjU7f//ny8rwiEkO6py2Y+fEgAQ=="
    },
    "react-test-renderer": {
      "version": "16.9.0",
      "resolved": "https://registry.npmjs.org/react-test-renderer/-/react-test-renderer-16.9.0.tgz",
      "integrity": "sha512-R62stB73qZyhrJo7wmCW9jgl/07ai+YzvouvCXIJLBkRlRqLx4j9RqcLEAfNfU3OxTGucqR2Whmn3/Aad6L3hQ==",
      "dev": true,
      "requires": {
        "object-assign": "^4.1.1",
        "prop-types": "^15.6.2",
        "react-is": "^16.9.0",
        "scheduler": "^0.15.0"
      },
      "dependencies": {
        "scheduler": {
          "version": "0.15.0",
          "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.15.0.tgz",
          "integrity": "sha512-xAefmSfN6jqAa7Kuq7LIJY0bwAPG3xlCj0HMEBQk1lxYiDKZscY2xJ5U/61ZTrYbmNQbXa+gc7czPkVo11tnCg==",
          "dev": true,
          "requires": {
            "loose-envify": "^1.1.0",
            "object-assign": "^4.1.1"
          }
        }
      }
    },
    "react-transform-hmr": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/react-transform-hmr/-/react-transform-hmr-1.0.4.tgz",
      "integrity": "sha1-4aQL0Krvxy6N/Xp82gmvhQZjl7s=",
      "dev": true,
      "requires": {
        "global": "^4.3.0",
        "react-proxy": "^1.1.7"
      }
    },
    "read-pkg": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
      "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
      "requires": {
        "load-json-file": "^2.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^2.0.0"
      }
    },
    "read-pkg-up": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
      "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
      "requires": {
        "find-up": "^2.0.0",
        "read-pkg": "^2.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
          "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
          "requires": {
            "locate-path": "^2.0.0"
          }
        },
        "locate-path": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
          "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
          "requires": {
            "p-locate": "^2.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
          "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
          "requires": {
            "p-try": "^1.0.0"
          }
        },
        "p-locate": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
          "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
          "requires": {
            "p-limit": "^1.1.0"
          }
        },
        "p-try": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
          "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M="
        }
      }
    },
    "readable-stream": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
      "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "realpath-native": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/realpath-native/-/realpath-native-1.1.0.tgz",
      "integrity": "sha512-wlgPA6cCIIg9gKz0fgAPjnzh4yR/LnXovwuo9hvyGvx3h8nX4+/iLZplfUWasXpqD8BdnGnP5njOFjkUwPzvjA==",
      "dev": true,
      "requires": {
        "util.promisify": "^1.0.0"
      }
    },
    "regenerate": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.0.tgz",
      "integrity": "sha512-1G6jJVDWrt0rK99kBjvEtziZNCICAuvIPkSiUFIQxVP06RCVpq3dmDo2oi6ABpYaDYaTRr67BEhL8r1wgEZZKg=="
    },
    "regenerate-unicode-properties": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.1.0.tgz",
      "integrity": "sha512-LGZzkgtLY79GeXLm8Dp0BVLdQlWICzBnJz/ipWUgo59qBaZ+BHtq51P2q1uVZlppMuUAT37SDk39qUbjTWB7bA==",
      "requires": {
        "regenerate": "^1.4.0"
      }
    },
    "regenerator-runtime": {
      "version": "0.13.3",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
      "integrity": "sha512-naKIZz2GQ8JWh///G7L3X6LaQUAMp2lvb1rvwwsURe/VXwD6VMfr+/1NuNw3ag8v2kY1aQ/go5SNn79O9JU7yw=="
    },
    "regenerator-transform": {
      "version": "0.14.1",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.1.tgz",
      "integrity": "sha512-flVuee02C3FKRISbxhXl9mGzdbWUVHubl1SMaknjxkFB1/iqpJhArQUvRxOOPEc/9tAiX0BaQ28FJH10E4isSQ==",
      "requires": {
        "private": "^0.1.6"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "regexpu-core": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.6.0.tgz",
      "integrity": "sha512-YlVaefl8P5BnFYOITTNzDvan1ulLOiXJzCNZxduTIosN17b87h3bvG9yHMoHaRuo88H4mQ06Aodj5VtYGGGiTg==",
      "requires": {
        "regenerate": "^1.4.0",
        "regenerate-unicode-properties": "^8.1.0",
        "regjsgen": "^0.5.0",
        "regjsparser": "^0.6.0",
        "unicode-match-property-ecmascript": "^1.0.4",
        "unicode-match-property-value-ecmascript": "^1.1.0"
      }
    },
    "regjsgen": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.0.tgz",
      "integrity": "sha512-RnIrLhrXCX5ow/E5/Mh2O4e/oa1/jW0eaBKTSy3LaCj+M3Bqvm97GWDp2yUtzIs4LEn65zR2yiYGFqb2ApnzDA=="
    },
    "regjsparser": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.0.tgz",
      "integrity": "sha512-RQ7YyokLiQBomUJuUG8iGVvkgOLxwyZM8k6d3q5SAXpg4r5TZJZigKFvC6PpD+qQ98bCDC5YelPeA3EucDoNeQ==",
      "requires": {
        "jsesc": "~0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0="
        }
      }
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
    },
    "repeat-element": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
      "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g=="
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc="
    },
    "request": {
      "version": "2.88.0",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
      "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
      "dev": true,
      "requires": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.0",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.4.3",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      },
      "dependencies": {
        "punycode": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
          "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
          "dev": true
        },
        "tough-cookie": {
          "version": "2.4.3",
          "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
          "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
          "dev": true,
          "requires": {
            "psl": "^1.1.24",
            "punycode": "^1.4.1"
          }
        }
      }
    },
    "request-promise-core": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.2.tgz",
      "integrity": "sha512-UHYyq1MO8GsefGEt7EprS8UrXsm1TxEvFUX1IMTuSLU2Rh7fTIdFtl8xD7JiEYiWU2dl+NYAjCTksTehQUxPag==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.11"
      }
    },
    "request-promise-native": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.7.tgz",
      "integrity": "sha512-rIMnbBdgNViL37nZ1b3L/VfPOpSi0TqVDQPAvO6U14lMzOLrt5nilxCQqtDKhZeDiW0/hkCXGoQjhgJd/tCh6w==",
      "dev": true,
      "requires": {
        "request-promise-core": "1.1.2",
        "stealthy-require": "^1.1.1",
        "tough-cookie": "^2.3.3"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
    },
    "require-main-filename": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE="
    },
    "resolve": {
      "version": "1.12.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.12.0.tgz",
      "integrity": "sha512-B/dOmuoAik5bKcD6s6nXDCjzUKnaDvdkRyAk6rsmsKLipWj4797iothd7jmmUhWTfinVMU+wc56rYKsit2Qy4w==",
      "requires": {
        "path-parse": "^1.0.6"
      }
    },
    "resolve-cwd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
      "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
      "dev": true,
      "requires": {
        "resolve-from": "^3.0.0"
      }
    },
    "resolve-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
      "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g="
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo="
    },
    "restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "requires": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg=="
    },
    "rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "rsvp": {
      "version": "4.8.5",
      "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-4.8.5.tgz",
      "integrity": "sha512-nfMOlASu9OnRJo1mbEk2cz0D56a1MBNrJ7orjRZQG10XDyuvwksKbuXNp6qa+kbn839HwjwhBzhFmdsaEAfauA=="
    },
    "run-async": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.3.0.tgz",
      "integrity": "sha1-A3GrSuC91yDUFm19/aZP96RFpsA=",
      "requires": {
        "is-promise": "^2.1.0"
      }
    },
    "rx-lite": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/rx-lite/-/rx-lite-4.0.8.tgz",
      "integrity": "sha1-Cx4Rr4vESDbwSmQH6S2kJGe3lEQ="
    },
    "rx-lite-aggregates": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/rx-lite-aggregates/-/rx-lite-aggregates-4.0.8.tgz",
      "integrity": "sha1-dTuHqJoRyVRnxKwWJsTvxOBcZ74=",
      "requires": {
        "rx-lite": "*"
      }
    },
    "rxjs": {
      "version": "5.5.12",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-5.5.12.tgz",
      "integrity": "sha512-xx2itnL5sBbqeeiVgNPVuQQ1nC8Jp2WfNJhXWHmElW9YmrpS9UVnNzhP3EH3HFqexO5Tlp8GhYY+WEcqcVMvGw==",
      "requires": {
        "symbol-observable": "1.0.1"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "sane": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/sane/-/sane-4.1.0.tgz",
      "integrity": "sha512-hhbzAgTIX8O7SHfp2c8/kREfEn4qO/9q8C9beyY6+tvZ87EpoZ3i1RIEvp27YBswnNbY9mWd6paKVmKbAgLfZA==",
      "requires": {
        "@cnakazawa/watch": "^1.0.3",
        "anymatch": "^2.0.0",
        "capture-exit": "^2.0.0",
        "exec-sh": "^0.3.2",
        "execa": "^1.0.0",
        "fb-watchman": "^2.0.0",
        "micromatch": "^3.1.4",
        "minimist": "^1.1.1",
        "walker": "~1.0.5"
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
    },
    "send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "mime": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
          "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
        },
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
        }
      }
    },
    "serialize-error": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/serialize-error/-/serialize-error-2.1.0.tgz",
      "integrity": "sha1-ULZ51WNc34Rme9yOWa9OW4HV9go="
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU="
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "requires": {
        "shebang-regex": "^1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM="
    },
    "shell-quote": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.6.1.tgz",
      "integrity": "sha1-9HgZSczkAmlxJ0MOo7PFR29IF2c=",
      "requires": {
        "array-filter": "~0.0.0",
        "array-map": "~0.0.0",
        "array-reduce": "~0.0.0",
        "jsonify": "~0.0.0"
      }
    },
    "shellwords": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/shellwords/-/shellwords-0.1.1.tgz",
      "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww=="
    },
    "signal-exit": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
      "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0="
    },
    "simple-plist": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/simple-plist/-/simple-plist-1.0.0.tgz",
      "integrity": "sha512-043L2rO80LVF7zfZ+fqhsEkoJFvW8o59rt/l4ctx1TJWoTx7/jkiS1R5TatD15Z1oYnuLJytzE7gcnnBuIPL2g==",
      "requires": {
        "bplist-creator": "0.0.7",
        "bplist-parser": "0.1.1",
        "plist": "^3.0.1"
      }
    },
    "sisteransi": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.3.tgz",
      "integrity": "sha512-SbEG75TzH8G7eVXFSN5f9EExILKfly7SUvVY5DhhYLvfhKqhDFY0OzevWa/zwak0RLRfWS5AvfMWpd9gJvr5Yg==",
      "dev": true
    },
    "slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
    },
    "slice-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-2.1.0.tgz",
      "integrity": "sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==",
      "requires": {
        "ansi-styles": "^3.2.0",
        "astral-regex": "^1.0.0",
        "is-fullwidth-code-point": "^2.0.0"
      }
    },
    "slide": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/slide/-/slide-1.1.6.tgz",
      "integrity": "sha1-VusCfWW00tzmyy4tMsTUr8nh1wc="
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "requires": {
        "kind-of": "^3.2.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
    },
    "source-map-resolve": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.2.tgz",
      "integrity": "sha512-MjqsvNwyz1s0k81Goz/9vRBe9SZdB09Bdw+/zYyO+3CuPk6fouTaxscHkgtE8jKvf01kVfl8riHzERQ/kefaSA==",
      "requires": {
        "atob": "^2.1.1",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.5.13",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.13.tgz",
      "integrity": "sha512-SHSKFHadjVA5oR4PPqhtAVdcBWwRYVd6g6cAXnIbRiIwc2EhPrTuKUBdSLvlEKyIP3GCf89fltvcZiP9MMFA1w==",
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "source-map-url": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
      "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM="
    },
    "spdx-correct": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
      "integrity": "sha512-lr2EZCctC2BNR7j7WzJ2FpDznxky1sjfxvvYEyzxNyb6lZXHODmEoJeFu4JupYlkfha1KZpJyoqiJ7pgA1qq8Q==",
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
      "integrity": "sha512-2XQACfElKi9SlVb1CYadKDXvoajPgBVPn/gOQLrTvHdElaVhr7ZEbqJaRnJLVNeaI4cMEAgVCeBMKF6MWRDCRA=="
    },
    "spdx-expression-parse": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
      "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
      "integrity": "sha512-J+FWzZoynJEXGphVIS+XEh3kFSjZX/1i9gFBaWQcB+/tmpe2qUsSBABpcxqxnAxFdiUFEgAX1bjYGQvIZmoz9Q=="
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "requires": {
        "extend-shallow": "^3.0.0"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
    },
    "sshpk": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "requires": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      }
    },
    "stack-utils": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.2.tgz",
      "integrity": "sha512-MTX+MeG5U994cazkjd/9KNAapsHnibjMLnfXodlkXw76JEea0UiNzrqidzo1emMwk7w5Qhc9jd4Bn9TBb1MFwA=="
    },
    "stacktrace-parser": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/stacktrace-parser/-/stacktrace-parser-0.1.7.tgz",
      "integrity": "sha512-Evm+NuZ2ZTwGazsbsZC+EV1EGsvyxgIvtNwbyFfeXaq/8L78M5Kdh0qpmQaTkUpbOAKbbPP7c7qZa7u8XFsrUA==",
      "requires": {
        "type-fest": "^0.7.1"
      }
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "stealthy-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
      "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
      "dev": true
    },
    "stream-buffers": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/stream-buffers/-/stream-buffers-2.2.0.tgz",
      "integrity": "sha1-kdX1Ew0c75bc+n9yaUUYh0HQnuQ="
    },
    "string-length": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-2.0.0.tgz",
      "integrity": "sha1-1A27aGo6zpYMHP/KVivyxF+DY+0=",
      "dev": true,
      "requires": {
        "astral-regex": "^1.0.0",
        "strip-ansi": "^4.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "requires": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "string.prototype.trimleft": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/string.prototype.trimleft/-/string.prototype.trimleft-2.1.0.tgz",
      "integrity": "sha512-FJ6b7EgdKxxbDxc79cOlok6Afd++TTs5szo+zJTUyow3ycrRfJVE2pq3vcN53XexvKZu/DJMDfeI/qMiZTrjTw==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "function-bind": "^1.1.1"
      }
    },
    "string.prototype.trimright": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/string.prototype.trimright/-/string.prototype.trimright-2.1.0.tgz",
      "integrity": "sha512-fXZTSV55dNBwv16uw+hh5jkghxSnc5oHq+5K/gXgizHwAvMetdAJlHqqoFC1FSDVPYWLkAKl2cxpUT41sV7nSg==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "function-bind": "^1.1.1"
      }
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "requires": {
        "ansi-regex": "^4.1.0"
      }
    },
    "strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM="
    },
    "strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "symbol-observable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.0.1.tgz",
      "integrity": "sha1-g0D8RwLDEi310iKI+IKD9RPT/dQ="
    },
    "symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true
    },
    "temp": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/temp/-/temp-0.8.3.tgz",
      "integrity": "sha1-4Ma8TSa5AxJEEOT+2BEDAU38H1k=",
      "requires": {
        "os-tmpdir": "^1.0.0",
        "rimraf": "~2.2.6"
      },
      "dependencies": {
        "rimraf": {
          "version": "2.2.8",
          "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.2.8.tgz",
          "integrity": "sha1-5Dm+Kq7jJzIZUnMPmaiSnk/FBYI="
        }
      }
    },
    "test-exclude": {
      "version": "5.2.3",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-5.2.3.tgz",
      "integrity": "sha512-M+oxtseCFO3EDtAaGH7iiej3CBkzXqFMbzqYAACdzKui4eZA+pq3tZEwChvOdNfa7xxy8BfbmgJSIr43cC/+2g==",
      "dev": true,
      "requires": {
        "glob": "^7.1.3",
        "minimatch": "^3.0.4",
        "read-pkg-up": "^4.0.0",
        "require-main-filename": "^2.0.0"
      },
      "dependencies": {
        "load-json-file": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
          "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "parse-json": "^4.0.0",
            "pify": "^3.0.0",
            "strip-bom": "^3.0.0"
          }
        },
        "path-type": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
          "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
          "dev": true,
          "requires": {
            "pify": "^3.0.0"
          }
        },
        "pify": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        },
        "read-pkg": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
          "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
          "dev": true,
          "requires": {
            "load-json-file": "^4.0.0",
            "normalize-package-data": "^2.3.2",
            "path-type": "^3.0.0"
          }
        },
        "read-pkg-up": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-4.0.0.tgz",
          "integrity": "sha512-6etQSH7nJGsK0RbG/2TeDzZFa8shjQ1um+SwQQ5cwKy0dhSXdOncEhb1CPpvQG4h7FyOV6EB6YlV0yJvZQNAkA==",
          "dev": true,
          "requires": {
            "find-up": "^3.0.0",
            "read-pkg": "^3.0.0"
          }
        },
        "require-main-filename": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
          "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
          "dev": true
        }
      }
    },
    "throat": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/throat/-/throat-4.1.0.tgz",
      "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo="
    },
    "through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
    },
    "through2": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "requires": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "time-stamp": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/time-stamp/-/time-stamp-1.1.0.tgz",
      "integrity": "sha1-dkpaEa9QVhkhsTPztE5hhofg9cM="
    },
    "tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "requires": {
        "os-tmpdir": "~1.0.2"
      }
    },
    "tmpl": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.4.tgz",
      "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE="
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "requires": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      }
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
    },
    "tough-cookie": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
      "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
      "dev": true,
      "requires": {
        "psl": "^1.1.28",
        "punycode": "^2.1.1"
      }
    },
    "tr46": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
      "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2"
      }
    },
    "type-fest": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.7.1.tgz",
      "integrity": "sha512-Ne2YiiGN8bmrmJJEuTWTLJR32nh/JdL1+PSicowtNb0WFpn59GK8/lfD61bVtzguz7b3PBt74nxpv/Pw5po5Rg=="
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "ua-parser-js": {
      "version": "0.7.20",
      "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-0.7.20.tgz",
      "integrity": "sha512-8OaIKfzL5cpx8eCMAhhvTlft8GYF8b2eQr6JkCyVdrgjcytyOmPCXrqXFcUnhonRpLlh5yxEZVohm6mzaowUOw=="
    },
    "uglify-es": {
      "version": "3.3.9",
      "resolved": "https://registry.npmjs.org/uglify-es/-/uglify-es-3.3.9.tgz",
      "integrity": "sha512-r+MU0rfv4L/0eeW3xZrd16t4NZfK8Ld4SWVglYBb7ez5uXFWHuVRs6xCTrf1yirs9a4j4Y27nn7SRfO6v67XsQ==",
      "requires": {
        "commander": "~2.13.0",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "commander": {
          "version": "2.13.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.13.0.tgz",
          "integrity": "sha512-MVuS359B+YzaWqjCL/c+22gfryv+mCBPHAv3zyVI2GN8EY6IRP8VwtasXn8jyyhvvq84R4ImN1OKRtcbIasjYA=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "ultron": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/ultron/-/ultron-1.0.2.tgz",
      "integrity": "sha1-rOEWq1V80Zc4ak6I9GhTeMiy5Po="
    },
    "unicode-canonical-property-names-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
      "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ=="
    },
    "unicode-match-property-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
      "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
      "requires": {
        "unicode-canonical-property-names-ecmascript": "^1.0.4",
        "unicode-property-aliases-ecmascript": "^1.0.4"
      }
    },
    "unicode-match-property-value-ecmascript": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.1.0.tgz",
      "integrity": "sha512-hDTHvaBk3RmFzvSl0UVrUmC3PuW9wKVnpoUDYH0JDkSIovzw+J5viQmeYHxVSBptubnr7PbH2e0fnpDRQnQl5g=="
    },
    "unicode-property-aliases-ecmascript": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.0.5.tgz",
      "integrity": "sha512-L5RAqCfXqAwR3RriF8pM0lU0w4Ryf/GgzONwi6KnL1taJQa7x1TCxdJnILX59WIGOwR57IVxn7Nej0fz1Ny6fw=="
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      }
    },
    "universalify": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E="
        }
      }
    },
    "uri-js": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
      "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI="
    },
    "use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ=="
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "util.promisify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.0.tgz",
      "integrity": "sha512-i+6qA2MPhvoKLuxnJNpXAGhg7HphQOSUq2LKMZD0m15EiskXUkMvKdF4Uui0WYeCUGea+o2cw/ZuwehtfsrNkA==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.2",
        "object.getownpropertydescriptors": "^2.0.3"
      }
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "uuid": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.3.tgz",
      "integrity": "sha512-pW0No1RGHgzlpHJO1nsVrHKpOEIxkGg1xB+v0ZmdNH5OAeAwzAVrCnI2/6Mtx+Uys6iaylxa+D3g4j63IKKjSQ=="
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "vlq": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/vlq/-/vlq-1.0.1.tgz",
      "integrity": "sha512-gQpnTgkubC6hQgdIcRdYGDSDc+SaujOdyesZQMv6JlfQee/9Mp0Qhnys6WxDWvQnL5WZdT7o2Ul187aSt0Rq+w=="
    },
    "w3c-hr-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.1.tgz",
      "integrity": "sha1-gqwr/2PZUOqeMYmlimViX+3xkEU=",
      "dev": true,
      "requires": {
        "browser-process-hrtime": "^0.1.2"
      }
    },
    "wait-for-expect": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/wait-for-expect/-/wait-for-expect-1.3.0.tgz",
      "integrity": "sha512-8fJU7jiA96HfGPt+P/UilelSAZfhMBJ52YhKzlmZQvKEZU2EcD1GQ0yqGB6liLdHjYtYAoGVigYwdxr5rktvzA==",
      "dev": true
    },
    "walker": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
      "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
      "requires": {
        "makeerror": "1.0.x"
      }
    },
    "wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "requires": {
        "defaults": "^1.0.3"
      }
    },
    "webidl-conversions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
      "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
      "dev": true
    },
    "whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "dev": true,
      "requires": {
        "iconv-lite": "0.4.24"
      }
    },
    "whatwg-fetch": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.0.0.tgz",
      "integrity": "sha512-9GSJUgz1D4MfyKU7KRqwOjXCXTqWdFNvEr7eUBYchQiVc744mqK/MzXPNR2WsPkmkOa4ywfg8C2n8h+13Bey1Q=="
    },
    "whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
      "dev": true
    },
    "whatwg-url": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-6.5.0.tgz",
      "integrity": "sha512-rhRZRqx/TLJQWUpQ6bmrt2UV4f0HCQ463yQuONJqC6fO2VoEb1pTYddbe59SkYq87aoM5A3bdhMZiUiVws+fzQ==",
      "dev": true,
      "requires": {
        "lodash.sortby": "^4.7.0",
        "tr46": "^1.0.1",
        "webidl-conversions": "^4.0.2"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
    },
    "wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus="
    },
    "wrap-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "write-file-atomic": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-1.3.4.tgz",
      "integrity": "sha1-+Aek8LHZ6ROuekgRLmzDrxmRtF8=",
      "requires": {
        "graceful-fs": "^4.1.11",
        "imurmurhash": "^0.1.4",
        "slide": "^1.1.5"
      }
    },
    "ws": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ws/-/ws-1.1.5.tgz",
      "integrity": "sha512-o3KqipXNUdS7wpQzBHSe180lBGO60SoK0yVo3CYJgb2MkobuWuBX6dhkYP5ORCLd55y+SaflMOV5fqAB53ux4w==",
      "requires": {
        "options": ">=0.0.5",
        "ultron": "1.0.x"
      }
    },
    "xcode": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/xcode/-/xcode-2.0.0.tgz",
      "integrity": "sha512-5xF6RCjAdDEiEsbbZaS/gBRt3jZ/177otZcpoLCjGN/u1LrfgH7/Sgeeavpr/jELpyDqN2im3AKosl2G2W8hfw==",
      "requires": {
        "simple-plist": "^1.0.0",
        "uuid": "^3.3.2"
      }
    },
    "xml-name-validator": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
      "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
      "dev": true
    },
    "xmlbuilder": {
      "version": "9.0.7",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-9.0.7.tgz",
      "integrity": "sha1-Ey7mPS7FVlxVfiD0wi35rKaGsQ0="
    },
    "xmldoc": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/xmldoc/-/xmldoc-1.1.2.tgz",
      "integrity": "sha512-ruPC/fyPNck2BD1dpz0AZZyrEwMOrWTO5lDdIXS91rs3wtm4j+T8Rp2o+zoOYkkAxJTZRPOSnOGei1egoRmKMQ==",
      "requires": {
        "sax": "^1.2.1"
      }
    },
    "xmldom": {
      "version": "0.1.27",
      "resolved": "https://registry.npmjs.org/xmldom/-/xmldom-0.1.27.tgz",
      "integrity": "sha1-1QH5ezvbQDr4757MIFcxh6rawOk="
    },
    "xpipe": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/xpipe/-/xpipe-1.0.5.tgz",
      "integrity": "sha1-jdi/Rfw/f1Xw4FS4ePQ6YmFNr98="
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "y18n": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
      "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w=="
    },
    "yallist": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
      "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI="
    },
    "yargs": {
      "version": "12.0.5",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-12.0.5.tgz",
      "integrity": "sha512-Lhz8TLaYnxq/2ObqHDql8dX8CJi97oHxrjUcYtzKbbykPtVW9WB+poxI+NM2UIzsMgNCZTIf0AQwsjK5yMAqZw==",
      "requires": {
        "cliui": "^4.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^3.0.0",
        "get-caller-file": "^1.0.1",
        "os-locale": "^3.0.0",
        "require-directory": "^2.1.1",
        "require-main-filename": "^1.0.1",
        "set-blocking": "^2.0.0",
        "string-width": "^2.0.0",
        "which-module": "^2.0.0",
        "y18n": "^3.2.1 || ^4.0.0",
        "yargs-parser": "^11.1.1"
      }
    },
    "yargs-parser": {
      "version": "11.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-11.1.1.tgz",
      "integrity": "sha512-C6kB/WJDiaxONLJQnF8ccx9SEeoTTLek8RVbaOIsrAUS8VrBEXfmeSnCZxygc+XC2sNMBIwOOnfcxiynjHsVSQ==",
      "requires": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      }
    }
  }
}

setInterval(function(){
  for(var i=0;i<stars.length;i++){
        stars[i].style.top = Math.round(Math.random()*window.innerHeight) +"px";
    }
}, 1000);