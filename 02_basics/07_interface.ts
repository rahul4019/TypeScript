interface User {
  readonly DbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// reopening of interface (adding more properties to previously defined interface)
interface User {
  githubToken: string;
}

// Inheritance
interface Admin extends User {
  role: 'admin' | 'learner' | 'ta';
}

const rahul: User = {
  DbId: 295710,
  email: 'rahul@gmail.com',
  userId: 295792,
  githubToken: 'github',
  startTrial: () => {
    return 'trial started';
  },
  getCoupon: (name: 'rahul10', off: 10) => {
    return 10;
  },
};

rahul.email = 'r@gmail.com';
// rahul.DbId =35 -> not allowed as it is readonly

const gaurav: Admin = {
  DbId: 295710,
  email: 'rahul@gmail.com',
  userId: 295792,
  githubToken: 'github',
  startTrial: () => {
    return 'trial started';
  },
  getCoupon: (name: 'rahul10', off: 10) => {
    return 10;
  },
  role: 'learner',
};

// * Interfaces can be reopened but Types can't

export {}