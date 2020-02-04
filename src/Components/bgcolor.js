const bgcolor = {
    '5': {
        't': {
            'r': 102,
            'g': 65,
            'b': 110
        },
        'b': {
            'r': 254,
            'g': 201,
            'b': 186
        }
    },
    '6': {
        't': {
            'r': 254,
            'g': 177,
            'b': 163
        },
        'b': {
            'r': 193,
            'g': 154,
            'b': 205
        }
    },
    '7': {
        't': {
            'r': 135,
            'g': 132,
            'b': 249,
        },
        'b': {
            'r': 135,
            'g': 132,
            'b': 249
        }
    },
    '16': {
        't': {
            'r': 254,
            'g': 176,
            'b': 161
        },
        'b': {
            'r': 254,
            'g': 176,
            'b': 161
        }
    },
    '17': {
        't': {
            'r': 136,
            'g': 122,
            'b': 249
        },
        'b': {
            'r': 254,
            'g': 176,
            'b': 161
        }
    },
    '18': {
        't': {
            'r': 63,
            'g': 35,
            'b': 131
        },
        'b': {
            'r': 138,
            'g': 92,
            'b': 248
        }
    }
};

export function getBackgroundColor() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();

    let color = null;
    if (h === 4) {
        color = {
            't': {
                'r': bgcolor['18']['t']['r'] + ((bgcolor['5']['t']['r'] - bgcolor['18']['t']['r']) * (m / 60)),
                'g': bgcolor['18']['t']['g'] + ((bgcolor['5']['t']['r'] - bgcolor['18']['t']['g']) * (m / 60)),
                'b': bgcolor['18']['t']['b'] + ((bgcolor['5']['t']['r'] - bgcolor['18']['t']['b']) * (m / 60))
            },
            'b': {
                'r': bgcolor['18']['b']['r'] + ((bgcolor['5']['b']['r'] - bgcolor['18']['b']['r']) * (m / 60)),
                'g': bgcolor['18']['b']['g'] + ((bgcolor['5']['b']['g'] - bgcolor['18']['b']['g']) * (m / 60)),
                'b': bgcolor['18']['b']['b'] + ((bgcolor['5']['b']['b'] - bgcolor['18']['b']['b']) * (m / 60))
            }
        }
    } else if (h === 5) {
        color = {
            't': {
                'r': bgcolor['5']['t']['r'] + ((bgcolor['6']['t']['r'] - bgcolor['5']['t']['r']) * (m / 60)),
                'g': bgcolor['5']['t']['g'] + ((bgcolor['6']['t']['r'] - bgcolor['5']['t']['g']) * (m / 60)),
                'b': bgcolor['5']['t']['b'] + ((bgcolor['6']['t']['r'] - bgcolor['5']['t']['b']) * (m / 60))
            },
            'b': {
                'r': bgcolor['5']['b']['r'] + ((bgcolor['6']['b']['r'] - bgcolor['5']['b']['r']) * (m / 60)),
                'g': bgcolor['5']['b']['g'] + ((bgcolor['6']['b']['g'] - bgcolor['5']['b']['g']) * (m / 60)),
                'b': bgcolor['5']['b']['b'] + ((bgcolor['6']['b']['b'] - bgcolor['5']['b']['b']) * (m / 60))
            }
        }
    } else if (h === 6) {
        color = {
            't': {
                'r': bgcolor['6']['t']['r'] + ((bgcolor['7']['t']['r'] - bgcolor['6']['t']['r']) * (m / 60)),
                'g': bgcolor['6']['t']['g'] + ((bgcolor['7']['t']['r'] - bgcolor['6']['t']['g']) * (m / 60)),
                'b': bgcolor['6']['t']['b'] + ((bgcolor['7']['t']['r'] - bgcolor['6']['t']['b']) * (m / 60))
            },
            'b': {
                'r': bgcolor['6']['b']['r'] + ((bgcolor['7']['b']['r'] - bgcolor['6']['b']['r']) * (m / 60)),
                'g': bgcolor['6']['b']['g'] + ((bgcolor['7']['b']['g'] - bgcolor['6']['b']['g']) * (m / 60)),
                'b': bgcolor['6']['b']['b'] + ((bgcolor['7']['b']['b'] - bgcolor['6']['b']['b']) * (m / 60))
            }
        }
    } else if (h >= 7 && h < 15) {
        color = {
            't': {
                'r': bgcolor['7']['t']['r'],
                'g': bgcolor['7']['t']['g'],
                'b': bgcolor['7']['t']['b']
            },
            'b': {
                'r': bgcolor['7']['b']['r'],
                'g': bgcolor['7']['b']['g'],
                'b': bgcolor['7']['b']['b']
            }
        }
    } else if (h === 15) {
        color = {
            't': {
                'r': bgcolor['7']['t']['r'] + ((bgcolor['16']['t']['r'] - bgcolor['7']['t']['r']) * (m / 60)),
                'g': bgcolor['7']['t']['g'] + ((bgcolor['16']['t']['r'] - bgcolor['7']['t']['g']) * (m / 60)),
                'b': bgcolor['7']['t']['b'] + ((bgcolor['16']['t']['r'] - bgcolor['7']['t']['b']) * (m / 60))
            },
            'b': {
                'r': bgcolor['7']['b']['r'] + ((bgcolor['16']['b']['r'] - bgcolor['7']['b']['r']) * (m / 60)),
                'g': bgcolor['7']['b']['g'] + ((bgcolor['16']['b']['g'] - bgcolor['7']['b']['g']) * (m / 60)),
                'b': bgcolor['7']['b']['b'] + ((bgcolor['16']['b']['b'] - bgcolor['7']['b']['b']) * (m / 60))
            }
        }
    } else if (h === 16) {
        color = {
            't': {
                'r': bgcolor['16']['t']['r'] + ((bgcolor['17']['t']['r'] - bgcolor['16']['t']['r']) * (m / 60)),
                'g': bgcolor['16']['t']['g'] + ((bgcolor['17']['t']['r'] - bgcolor['16']['t']['g']) * (m / 60)),
                'b': bgcolor['16']['t']['b'] + ((bgcolor['17']['t']['r'] - bgcolor['16']['t']['b']) * (m / 60))
            },
            'b': {
                'r': bgcolor['16']['b']['r'] + ((bgcolor['17']['b']['r'] - bgcolor['16']['b']['r']) * (m / 60)),
                'g': bgcolor['16']['b']['g'] + ((bgcolor['17']['b']['g'] - bgcolor['16']['b']['g']) * (m / 60)),
                'b': bgcolor['16']['b']['b'] + ((bgcolor['17']['b']['b'] - bgcolor['16']['b']['b']) * (m / 60))
            }
        }
    } else if (h === 17) {
        color = {
            't': {
                'r': bgcolor['17']['t']['r'] + ((bgcolor['18']['t']['r'] - bgcolor['18']['t']['r']) * (m / 60)),
                'g': bgcolor['17']['t']['g'] + ((bgcolor['18']['t']['r'] - bgcolor['18']['t']['g']) * (m / 60)),
                'b': bgcolor['17']['t']['b'] + ((bgcolor['18']['t']['r'] - bgcolor['18']['t']['b']) * (m / 60))
            },
            'b': {
                'r': bgcolor['17']['b']['r'] + ((bgcolor['18']['b']['r'] - bgcolor['18']['b']['r']) * (m / 60)),
                'g': bgcolor['17']['b']['g'] + ((bgcolor['18']['b']['g'] - bgcolor['18']['b']['g']) * (m / 60)),
                'b': bgcolor['17']['b']['b'] + ((bgcolor['18']['b']['b'] - bgcolor['18']['b']['b']) * (m / 60))
            }
        }
    } else if (h > 17 || h < 4) {
        color = {
            't': {
                'r': bgcolor['18']['t']['r'],
                'g': bgcolor['18']['t']['g'],
                'b': bgcolor['18']['t']['b']
            },
            'b': {
                'r': bgcolor['18']['b']['r'],
                'g': bgcolor['18']['b']['g'],
                'b': bgcolor['18']['b']['b']
            }
        }
    }
    return color;
}